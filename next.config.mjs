/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: "/peanxtt",
  images: {
    unoptimized: true
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/resume',
          destination: '/static/resume.pdf'
        }
      ]
    }
  }
};

export default nextConfig;
