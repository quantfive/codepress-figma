# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the CodePress Figma demo site - a Next.js landing page that showcases the CodePress visual editor. It embeds the `@quantfive/codepress-browser-extension` package to provide live editing capabilities and uses the `@codepress/codepress-engine` SWC plugin to instrument React components with source location metadata.

## Commands

- **Dev**: `pnpm dev` (runs with Turbopack)
- **Build**: `pnpm build`
- **Start**: `pnpm start` (production server)
- **Lint**: `pnpm lint`

## Architecture

### CodePress Integration

The site integrates CodePress through three mechanisms:

1. **SWC Plugin** (`next.config.ts`): The `@codepress/codepress-engine/swc` plugin instruments all JSX elements with `codepress-data-fp` attributes containing file paths and line numbers, enabling visual element selection.

2. **Webpack Plugin** (`next.config.ts`): The `CodePressWebpackPlugin` from `@codepress/codepress-engine/webpack-plugin` handles additional build-time integration.

3. **CodePressEditor Component** (`src/components/CodePressEditor.tsx`): Dynamically imports the visual editor from `@quantfive/codepress-browser-extension`. For this demo, it uses a server-side JWT proxy to authenticate API requests without exposing tokens to the browser.

### API Proxy

`src/pages/api/codepress-editor/[...path].ts` proxies all editor API requests to `api.codepress.dev`, adding the demo user's JWT server-side via `CODEPRESS_DEMO_USER_JWT` env var. WebSocket connections bypass the proxy and connect directly.

### Component Structure

- `src/components/` - Landing page sections (hero, features, FAQ, pricing, etc.)
- `src/components/ui/` - shadcn/ui components (new-york style)
- `src/pages/` - Next.js pages router
- `src/lib/` - Utilities including `cn()` for Tailwind class merging and `gradients.ts` for brand gradient generation

## Code Style

- **Styling**: TailwindCSS v4 with shadcn/ui (new-york style, slate base color)
- **Path Alias**: `@/*` maps to `./src/*`
- **Icons**: lucide-react

## Environment Variables

- `CODEPRESS_DEMO_USER_JWT` - JWT token for demo user authentication (required for API proxy)
- `GH_TOKEN` - GitHub token for package registry access

## Local Development

When running locally (`NODE_ENV !== 'production'`), the app expects the CodePress backend at `http://localhost:8007`. The API proxy forwards requests there, and WebSocket connections connect directly to that URL.

## Important Notes

- CodePressEditor **must use `useShadow: true`** to scope styles and avoid global conflicts with the host page
- WebSocket connections bypass the API proxy and connect directly to `api.codepress.dev`
- The editor styles are imported dynamically in `_app.tsx` to avoid SSR issues
- All colors use OKLCh color space (defined in `globals.css`) for better color manipulation
- The `repo_name` in `next.config.ts` (`quantfive/codepress-figma`) must match the GitHub repository for CodePress instrumentation to work correctly
