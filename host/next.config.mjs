/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          basket: `basket@http://localhost:3002/remoteEntry.js`,
          products: `products@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: `static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        extraOptions: {},
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
