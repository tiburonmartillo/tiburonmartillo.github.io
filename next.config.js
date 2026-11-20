/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Replaces the removed `next export` command. `next build` writes static HTML to `out/`.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  transpilePackages: ['@ui-sdk/react', '@ui-sdk/core'],
};

export default nextConfig;
