import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  babel: {
    presets: [
      "next/babel", // Preset do Next.js
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-transform-runtime"
    ]
  },
};

export default nextConfig;
