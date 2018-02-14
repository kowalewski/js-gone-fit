/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMonitor = require('webpack-monitor');

const IS_PROD = (process.env.NODE_ENV === 'production');

const getPlugins = (isProd) => {
	let defaultPlugins = [
		new WebpackMonitor({
			capture: true,
			launch: true,
		}),
		new ExtractTextPlugin('app.css'),
	];

	return isProd ? [
		...defaultPlugins,
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJSPlugin(),
	] :
	defaultPlugins;
};

module.exports = {
	devtool: !IS_PROD ? 'inline-source-map' : false,
	entry: [
		'./src/js/index'
	],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: '[name].bundle.js',
		publicPath: "/dist/",
	},
	plugins: getPlugins(IS_PROD),
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			include: __dirname
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}]
	}
};
