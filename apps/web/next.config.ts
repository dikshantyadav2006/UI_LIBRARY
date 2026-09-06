import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ui-library/ui'],
  experimental: {
    optimizePackageImports: ['@ui-library/ui'],
  },
};

export default nextConfig;
