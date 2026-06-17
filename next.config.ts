import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/valoni",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
