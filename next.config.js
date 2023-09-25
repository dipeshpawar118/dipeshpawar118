/** @type {import('next').NextConfig} */
const nextConfig = {
  // This has to be removed Once we have access to Strapi
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  output: 'standalone',
};

module.exports = nextConfig;