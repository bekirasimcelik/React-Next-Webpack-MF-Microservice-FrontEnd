const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require('path');

const moduleFederationConfig = {
  name: "remoteNext",
  filename: "static/chunks/remoteNext.js",
  remotes: {
    host: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`
  },
  exposes: {
    './ProductList': './components/ProductList.tsx'
  },
  resolve: {
    alias: {
      'shared-state': path.resolve(__dirname, '../../shared/store'),
    },
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
    },
    '@reduxjs/toolkit': {
      singleton: true,
      requiredVersion: '^2.5.1'
    },
    'react-redux': {
      singleton: true,
      requiredVersion: '^9.2.0'
    },
    'shared/store/store': {
      singleton: true,
      eager: true
    }
  },
};

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(new NextFederationPlugin(moduleFederationConfig));
    }
    return config;
  },
};
