const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s3-sa-east-1.amazonaws.com'],
  },
  reactStrictMode: false,
  output: 'standalone',
  generateBuildId: async () => {
    return 'next-build-' + Date.now()
  },
}

module.exports = nextConfig
