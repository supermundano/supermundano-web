// const withPlugins = require('next-compose-plugins');

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['cdn.sanity.io','via.placeholder.com'],
//   },
// };

// module.exports = withPlugins([
// ], nextConfig)


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','via.placeholder.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
