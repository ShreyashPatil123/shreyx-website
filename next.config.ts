import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/downloads/shreyx-music-beta.apk",
        destination: "https://github.com/ShreyashPatil123/shreyx-music/releases/download/v1.1.3/app-release.apk",
        permanent: false,
      },
      {
        source: "/downloads/shreyx-tube-preview.apk",
        destination: "https://github.com/ShreyashPatil123/shreyx-tube/releases/download/v0.1.0-preview/shreyx-tube-preview.apk",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
