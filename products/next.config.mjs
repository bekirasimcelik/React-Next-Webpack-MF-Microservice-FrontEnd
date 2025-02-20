import { NextFederationPlugin } from '@module-federation/nextjs-mf';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
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
        name: 'products',
        remotes: {},
        filename: `static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        exposes: {
          './Products': './src/components/Products',
          './productsApi': './src/redux/api',
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,  
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          antd: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'react-redux': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
