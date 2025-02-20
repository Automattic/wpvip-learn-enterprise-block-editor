import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const ReadingTimePanel = () => {
	const postContent = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostContent(),
		[]
	);

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
	registerPlugin( 'reading-time-panel', { render: ReadingTimePanel } );
};
