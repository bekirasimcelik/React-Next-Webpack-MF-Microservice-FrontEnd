const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            remote: "remote@http://localhost:3001/remote.js",
            remoteNext:
              "remoteNext@http://localhost:3002/_next/static/chunks/remoteNext.js",
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Navbar": "./components/Navbar",
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
            },
            'shared/features/products/productsService': { singleton: true }
          },
        })
      );
    }

    return config;
  },
};
