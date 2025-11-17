import { useEffect, useState } from "react";

// For the public Figma demo, proxy all editor API requests through
// a Next.js API route so that the demo user's JWT never reaches
// the browser. The API route adds authentication server-side.
const CODEPRESS_EDITOR_API_BASE_URL = "/api/codepress-editor/v1";

type EditorType =
  typeof import("@quantfive/codepress-browser-extension")["CodePressEditor"];

export function CodePressEditor() {
  const [EditorComponent, setEditorComponent] = useState<EditorType | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    import("@quantfive/codepress-browser-extension")
      .then((module) => {
        if (isSubscribed) {
          setEditorComponent(() => module.CodePressEditor);
        }
      })
      .catch((error) => {
        console.error("Failed to load CodePress editor", error);
      });

    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          "codepress-editing-mode",
          JSON.stringify(Boolean(true))
        );
      } catch {
        // Ignore storage failures (e.g., SSR, private mode)
      }
    }
  }, []);

  // Don't render on server-side
  if (!mounted || !EditorComponent) {
    return null;
  }

  // In the Figma demo we authenticate as a fixed demo user on the server
  // via the `/api/codepress-editor` proxy, so the client does not need
  // to hold a JWT at all.
  const tokenProvider = async () => null;

  return (
    <EditorComponent
      tokenProvider={tokenProvider}
      useShadow={true}
      demo={true}
      apiBaseUrl={CODEPRESS_EDITOR_API_BASE_URL}
      protectedBranches={["main"]}
    />
  );
}
