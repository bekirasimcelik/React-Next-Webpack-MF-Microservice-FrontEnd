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
        })
      );
    }

    return config;
  },
};
