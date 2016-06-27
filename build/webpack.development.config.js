var path = require('path');

module.exports = function({ BOILER_PATH, HOST, PORT, webpack, plugins }) {

	return {
		entry: [
			`webpack-dev-server/client?http://${HOST}:${PORT}/`,
			'webpack/hot/dev-server',
			path.resolve(__dirname, '../application/main.js')
		],

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'application-[hash].js'
		},

		module: {
			loaders: [
				{
					test: /\.js$/i,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.tpl$/i,
					loader: 'handlebars-template-loader'
				},
				{
					test: /\.css$/i,
					loaders: ['style-loader', 'css-loader']
				},
				{
					test: /\.(eot|woff2?|ttf|svg|png|jpg)(\?.*)*$/i,
					loader: 'file-loader',
					query: {
						name: 'assets/img/[name].[ext]'
					}
				},
				{
					test: /\.json$/i,
					loader: 'json-loader',
					exclude: /node_modules/
				}
			]
		},

		babel: {
			presets: [ path.resolve(BOILER_PATH, 'node_modules/babel-preset-es2015') ],
			plugins: [ path.resolve(BOILER_PATH, 'node_modules/babel-plugin-transform-runtime') ]
		},

		resolve: {
			root: [
				path.resolve(__dirname, '../'),
				path.resolve(__dirname, '../application'),
				path.resolve(__dirname, '../node_modules'),
				path.resolve(BOILER_PATH, 'node_modules')
			]
		},

		resolveLoader: {
			root: [	path.resolve(BOILER_PATH, 'node_modules') ]
		},

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new plugins.HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				favicon: 'favicon.ico'
			}),
			new plugins.Notifier()
		],

		devtool: 'cheap-module-eval-source-map'
	};
};