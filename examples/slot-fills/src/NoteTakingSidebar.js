/* global localStorage */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/editor';
import { PanelBody, TextareaControl, Button } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

const NoteTakingSidebar = () => {
	const [ notes, setNotes ] = useState( '' );
	const postId = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostId(),
		[]
	);

	useEffect( () => {
		const savedNotes = localStorage.getItem( `editor_notes_${ postId }` );
		if ( savedNotes ) {
			setNotes( savedNotes );
		}
	}, [ postId ] );

	const handleSaveNotes = () => {
		localStorage.setItem( `editor_notes_${ postId }`, notes );
	};

	const handleClearNotes = () => {
		setNotes( '' );
		localStorage.removeItem( `editor_notes_${ postId }` );
	};

	return (
		<PluginSidebar
			name="note-taking-sidebar"
			title={ __( 'Note Taking' ) }
			icon={
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle r="10" cx="10" cy="10" fill="#FF0000" />
				</svg>
			}
		>
			<PanelBody>
				<h2>{ __( 'Editor Notes' ) }</h2>
				<p>
					{ __(
						'These notes are saved to local storage individually for each post.',
						'wpviplearn'
					) }
				</p>
				<TextareaControl
					label={ __( 'Take Notes' ) }
					value={ notes }
					onChange={ ( value ) => setNotes( value ) }
				/>
				<Button variant="primary" onClick={ handleSaveNotes }>
					{ __( 'Save Notes' ) }
				</Button>
				<Button variant="secondary" onClick={ handleClearNotes }>
					{ __( 'Clear Notes' ) }
				</Button>
			</PanelBody>
		</PluginSidebar>
	);
};

registerPlugin( 'wpviplearn-note-taking-sidebar', {
	render: NoteTakingSidebar,
} );
