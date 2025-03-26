const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	...{
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
			SomeReturn: path.resolve( process.cwd(), 'src', 'SomeReturn.js' ),
		},
		plugins: [
			...defaultConfig.plugins,
			new CopyWebpackPlugin( {
				patterns: [
					{
						from: 'src/index.js',
						to: 'index.js',
					},
				],
			} ),
		],
	},
};
