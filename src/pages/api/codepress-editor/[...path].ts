import type { NextApiRequest, NextApiResponse } from "next";

const CODEPRESS_UPSTREAM_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.codepress.dev"
    : "http://localhost:8007";

/**
 * Proxy all CodePress editor API requests through Next.js so that the
 * demo user's JWT never needs to be exposed to the browser. The proxy
 * adds the Authorization header on the server using a non-public env var.
 *
 * Public route shape (from the browser / CodePressEditor):
 *   /api/codepress-editor/v1/...
 *
 * Upstream route shape (CodePress backend):
 *   https://api.codepress.dev/v1/...
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const demoToken = process.env.CODEPRESS_DEMO_USER_JWT;
  const useDemoAuth = Boolean(demoToken);

  const { path: rawPath, ...restQuery } = req.query;
  const path = Array.isArray(rawPath) ? rawPath.join("/") : rawPath || "";

  // Preserve any query string parameters when forwarding to the upstream API.
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(restQuery)) {
    if (value == null) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, String(v)));
    } else {
      searchParams.append(key, String(value));
    }
  }

  const queryString = searchParams.toString();

  // Strip the local `/api/codepress-editor` prefix and forward the remainder
  // to the upstream API. The incoming path will already include `v1/...`.
  const upstreamUrl = `${CODEPRESS_UPSTREAM_BASE_URL}/${path}${
    queryString ? `?${queryString}` : ""
  }`;

  const headers = new Headers();

  // Forward most incoming headers. When using the demo auth token we override
  // any incoming Authorization header; otherwise we preserve whatever the
  // client sent through.
  for (const [key, value] of Object.entries(req.headers)) {
    if (!value) continue;
    const lowerKey = key.toLowerCase();
    if (lowerKey === "host") continue;
    if (useDemoAuth && lowerKey === "authorization") continue;

    if (Array.isArray(value)) {
      headers.set(key, value.join(","));
    } else {
      headers.set(key, value);
    }
  }

  if (useDemoAuth) {
    headers.set("authorization", `Bearer ${demoToken}`);
  }

  let body: BodyInit | undefined;
  const method = (req.method || "GET").toUpperCase();

  if (method !== "GET" && method !== "HEAD") {
    const contentType = req.headers["content-type"] || "";

    if (typeof req.body === "string" || req.body instanceof Buffer) {
      body = req.body as BodyInit;
    } else if (
      typeof req.body === "object" &&
      contentType.toString().includes("application/json")
    ) {
      body = JSON.stringify(req.body);
      headers.set("content-type", "application/json");
    } else {
      // Fallback: let fetch handle an empty body if we don't recognize it
      body = undefined;
    }
  }

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method,
      headers,
      body,
    });

    // Forward status and most headers to the client
    res.status(upstreamResponse.status);
    upstreamResponse.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase();
      if (lowerKey === "content-encoding" || lowerKey === "transfer-encoding") {
        return;
      }
      res.setHeader(key, value);
    });

    const text = await upstreamResponse.text();
    res.send(text);
  } catch (error) {
    console.error("Error proxying CodePress editor request", error);
    res.status(500).json({ error: "Failed to reach CodePress API" });
  }
}
