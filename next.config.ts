import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Standalone landing pages served from /public as static HTML.
  async rewrites() {
    return [
      { source: "/breathizen", destination: "/breathizen/index.html" },
      { source: "/klaronail", destination: "/klaronail/index.html" },
      { source: "/nervealive", destination: "/nervealive/index.html" },
      { source: "/sugardefender", destination: "/sugardefender/index.html" },
      { source: "/dentavive", destination: "/dentavive/index.html" },
      { source: "/honeyharmony", destination: "/honeyharmony/index.html" },
      { source: "/audifort", destination: "/audifort/index.html" },
      { source: "/gelatinesculpt", destination: "/gelatinesculpt/index.html" },
      { source: "/gelagen", destination: "/gelagen/index.html" },
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
