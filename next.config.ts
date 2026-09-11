import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Without this, Turbopack walks up to C:\Users\swaga looking for a lockfile
  // and warns that the workspace root would include the whole home directory.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
