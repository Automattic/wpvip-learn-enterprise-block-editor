/* eslint-disable no-console */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const ReadingTimePanel = () => {
	const isViewable = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );
		return postTypeObject?.viewable;
	}, [] );

	const postContent = useSelect(
		( select ) => select( editorStore ).getEditedPostContent(),
		[]
	);

	// If the post type is not viewable, then do not render my the fill.
	if ( ! isViewable ) {
		return null;
	}

	const calculateReadingTime = ( content ) => {
		const wordsPerMinute = 200;
		const text = content.replace( /<[^>]*>/g, '' ); // Remove HTML tags
		const wordCount = text.trim().split( /\s+/ ).length;
		return Math.ceil( wordCount / wordsPerMinute );
	};

	const readingTime = calculateReadingTime( postContent );

	return (
		<PluginDocumentSettingPanel
			name="reading-time-panel"
			title={ __( 'Reading Time', 'reading-time-panel' ) }
			icon={
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle r="10" cx="10" cy="10" fill="#800080" />
				</svg>
			}
		>
			<p>
				{ __( 'Estimated Reading Time:', 'reading-time-panel' ) }{ ' ' }
				<strong>
					{ readingTime } { __( 'minutes', 'reading-time-panel' ) }
				</strong>
			</p>
		</PluginDocumentSettingPanel>
	);
};

export const registerReadingTimePanel = () => {
	console.log( 'ReadingTimePanel' );
	registerPlugin( 'reading-time-panel', { render: ReadingTimePanel } );
};
