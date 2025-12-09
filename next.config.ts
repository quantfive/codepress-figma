import createSWCPlugin from "@codepress/codepress-engine/swc";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    swcPlugins: [
      // Use the SWC plugin
      createSWCPlugin({
        repo_name: "quantfive/codepress-figma",
      }),
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["@quantfive/codepress-browser-extension"],
  webpack: (config) => {
    config.resolve.conditionNames = ["import", "module", "default"];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
