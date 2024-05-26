/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'restfulcountries.com',
      },
    ]
  },
}

export default nextConfig
