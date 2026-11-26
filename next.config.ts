import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Standalone landing pages served from /public as static HTML.
  async rewrites() {
    return [
      { source: "/breathizen", destination: "/breathizen/index.html" },
      { source: "/slimtide", destination: "/slimtide/index.html" },
      { source: "/memohoney", destination: "/memohoney/index.html" },
      { source: "/sodatide", destination: "/sodatide/index.html" },
      { source: "/sodapeak", destination: "/sodapeak/index.html" },
      { source: "/vapocept", destination: "/vapocept/index.html" },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
