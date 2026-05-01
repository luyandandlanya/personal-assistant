import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-assistant',
  assetPrefix: '/personal-assistant',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
