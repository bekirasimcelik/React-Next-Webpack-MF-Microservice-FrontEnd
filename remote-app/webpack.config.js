const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      remotes: {
        host: "host@http://localhost:3000/_next/static/chunks/remoteEntry.js",
      },
      library: { type: "var", name: "remote" },
      filename: "remote.js",
      exposes: {
        //"./Button": "./src/Button",
        "./Basket": "./src/App",
      },
      shared: {
        "@stitches/react": {
          singleton: true,
        },
        react: {
          singleton: true,
          version: "0",
          requiredVersion: false,
        },
        "react-dom": {
          requiredVersion: false,
          singleton: true,
          version: "0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
