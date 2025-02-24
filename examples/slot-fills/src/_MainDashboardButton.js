/**
 * WordPress dependencies
 */
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalMainDashboardButton as MainDashboardButton,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalFullscreenModeClose as FullscreenModeClose,
} from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

// Register the plugin.
registerPlugin( 'example-edit-post-main-dashboard-button', {
	render: () => (
		<MainDashboardButton>
			<FullscreenModeClose
				icon={ 'smiley' }
				href="http://wordpress.org"
			/>
		</MainDashboardButton>
	),
	icon: 'smiley',
} );
