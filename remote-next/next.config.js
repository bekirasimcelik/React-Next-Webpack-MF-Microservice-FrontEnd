const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const moduleFederationConfig = {
  name: "remoteNext",
  filename: "static/chunks/remoteNext.js",
  remotes: {
    host: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`
  },
  exposes: {
    "./Products": "./pages/products.js",
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
