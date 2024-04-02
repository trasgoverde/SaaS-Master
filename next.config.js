// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['oaidalleapiprodscus.blob.core.windows.net']
//   }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'oaidalleapiprodscus.blob.core.windows.net'
      }
    ]
  }
}

module.exports = nextConfig
