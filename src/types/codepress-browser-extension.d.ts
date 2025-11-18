declare module "@quantfive/codepress-browser-extension" {
  import { ComponentType } from "react";

  export interface CodePressEditorProps {
    tokenProvider?: () => Promise<string | null>;
    autoSaveToCurrentBranch?: boolean;
    useShadow?: boolean;
    apiBaseUrl?: string;
    /**
     * Optional WebSocket base URL. When provided, this is used for agent
     * WebSocket connections instead of deriving the WS URL from apiBaseUrl.
     */
    wsBaseUrl?: string;
    protectedBranches?: string[];
    demo?: boolean;
  }

  export const CodePressEditor: ComponentType<CodePressEditorProps>;
}

declare module "@quantfive/codepress-browser-extension/style" {
  const styles: void;
  export default styles;
}
