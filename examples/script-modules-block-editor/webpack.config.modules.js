const [
	defaultConfigNonModule,
	defaultConfigModule,
] = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = [
	defaultConfigNonModule,
	{
		...defaultConfigModule,
		entry: {
			AnotherReturn: path.resolve(
				process.cwd(),
				'assets',
				'AnotherReturn.js'
			),
		},
		// These lines are necessary to enable module compilation at time-of-writing:
		output: {
			module: true,
			filename: '[name].js',
			path: path.resolve( process.cwd(), 'build' ),
		},
		experiments: { outputModule: true },
	},
];
