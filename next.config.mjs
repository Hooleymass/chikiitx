import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'glorious-meme-r5gj4wjpggwfxv7q-3000.app.github.dev',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'pub-2af5a0856a4a42c3b267a44f15493caf.r2.dev',
        port: '',
        pathname: '/chikiimass/**'
      }
    ]
  },
}

export default withPayload(nextConfig)
