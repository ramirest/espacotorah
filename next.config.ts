import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — no Node server needed (Render "Static Site").
  output: "export",
  // Clean URLs as folders: /museu/ -> museu/index.html
  trailingSlash: true,
  images: {
    // The Next image optimizer requires a server; disable it for static export.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
