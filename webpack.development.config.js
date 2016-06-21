module.exports = {
	entry: ['application/main.js'],

	output: {
		path: 'dist',
		filename: 'application-[hash].js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/i,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
					plugins: ['transform-runtime']
				}
			},
			{
				test: /\.tpl$/i,
				loader: 'webpack-template-loader'
			},
			{
				test: /\.css$/i,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(eot|woff2?|ttf|svg|png|jpg)(\?.*)*$/i,
				loader: 'file-loader',
				query: {
					name: 'img/[name].[ext]'
				}
			},
			{
				test: /\.json$/i,
				loader: 'json-loader',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		modulesDirectories: ['', 'application', 'node_modules'],
		extensions: ['', '.js']
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			favicon: './favicon.ico',
			icon: './favicon.ico'
		}),
		new Notifier()
	],

	devtool: 'cheap-module-eval-source-map'
};