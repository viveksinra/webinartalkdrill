import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable writing trace file to avoid intermittent EPERM on Windows
  outputFileTracing: false,
};

export default nextConfig;
