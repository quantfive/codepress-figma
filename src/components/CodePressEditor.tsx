import { useEffect, useState } from "react";

const CODEPRESS_EDITOR_API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.codepress.dev/v1"
    : "http://localhost:8007/v1";

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

  const tokenProvider = async () => {
    // You can add authentication token logic here if needed
    return null;
  };

  return (
    <EditorComponent
      tokenProvider={tokenProvider}
      useShadow={true}
      apiBaseUrl={CODEPRESS_EDITOR_API_BASE_URL}
      protectedBranches={["main"]}
    />
  );
}
