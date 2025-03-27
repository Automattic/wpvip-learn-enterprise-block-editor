const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	experiments: {
		...defaultConfig.experiments,
		outputModule: true,
	},
	entry: {
		ReadingTimePanel: path.resolve(
			process.cwd(),
			'src',
			'ReadingTimePanel.js'
		),
		CopyBlockAsJsonMenuItem: path.resolve(
			process.cwd(),
			'src',
			'CopyBlockAsJsonMenuItem.js'
		),
		tools: path.resolve( process.cwd(), 'src', 'tools.js' ),
	},
	output: {
		...defaultConfig.output,
		library: {
			type: 'module',
		},
	},
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin( {
			patterns: [
				{
					from: 'src/index.js',
					to: 'index.js',
					transform( content ) {
						return content;
					},
				},
				{
					from: 'src/SomeReturn.js',
					to: 'SomeReturn.js',
					transform( content ) {
						return content;
					},
				},
			],
		} ),
	],
};
