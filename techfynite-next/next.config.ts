import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile higher up the tree isn't picked instead.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
