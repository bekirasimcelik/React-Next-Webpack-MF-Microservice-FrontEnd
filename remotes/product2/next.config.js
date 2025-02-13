const path = require('path');
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federationConfig = {
	name: "remote_product2",
	filename: "static/chunks/remote.js",
	exposes: {
		"./ProductList2": "./components/ProductList2.tsx",
	},
	remotes: [],
	shared: {
		react: { singleton: true, requiredVersion: "18.2.0" },
		"react-dom": { singleton: true, requiredVersion: "18.2.0" }
	}
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		externalDir: true
	},
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(new NextFederationPlugin(federationConfig));
		}
		config.resolve.alias = {
			...config.resolve.alias,
			'@shared': path.resolve(__dirname, '../shared')
		};
		return config;
	},
};

module.exports = nextConfig;
