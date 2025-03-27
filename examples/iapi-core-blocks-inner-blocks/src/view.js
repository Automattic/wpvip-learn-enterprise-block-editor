/**
 * Custom module script required for the media text interactive pattern.
 */

/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store( 'elementary/media-text-interactive', {
	actions: {
		/**
		 * Update the video play state.
		 *
		 * @return {void}
		 */
		playOrStop() {
			const context = getContext();
			context.isPlaying = ! context.isPlaying;
			context.buttonText = context.isPlaying ? 'Stop' : 'Play';
		},
	},
	callbacks: {
		/**
		 * Play the video.
		 *
		 * @return {void}
		 */
		playOrStopVideo() {
			const context = getContext();
			const { ref } = getElement();
			const video = ref.querySelector( 'video' );
			if ( video && context.isPlaying ) {
				video.play();
			} else if ( video ) {
				video.pause();
			}
		},
	},
} );
