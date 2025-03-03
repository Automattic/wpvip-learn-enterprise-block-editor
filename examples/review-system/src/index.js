import { useSelect, useDispatch } from '@wordpress/data';
import {
	PluginDocumentSettingPanel,
	store as editStore,
} from '@wordpress/editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { formatDate } from './utils';
import { useEffect } from '@wordpress/element';
// create and register the store
import './store';

const ReviewPanel = () => {
	const { reviewStatus, log, postId } = useSelect( ( select ) => {
		const currentPostId = select( 'core/editor' ).getCurrentPostId();
		return {
			postId: currentPostId,
			reviewStatus: select( 'review-system/review' ).getReviewStatus(
				currentPostId
			),
			log: select( 'review-system/review' ).getReviewLog( currentPostId ),
		};
	} );

	const { updateReviewStatus, clearHistory } = useDispatch(
		'review-system/review'
	);
	const { toggleEditorPanelOpened } = useDispatch( editStore );

	const handleStatusChange = ( newStatus ) => {
		updateReviewStatus( postId, newStatus );
	};

	const handleClearHistory = () => {
		if (
			// eslint-disable-next-line no-alert
			window.confirm(
				__(
					'Are you sure you want to clear the history?',
					'review-system'
				)
			)
		) {
			clearHistory( postId );
		}
	};

	const getStatusLabel = ( status ) => {
		switch ( status ) {
			case 'ready_for_review':
				return __( 'Ready for Review', 'review-system' );
			case 'approved':
				return __( 'Approved', 'review-system' );
			default:
				return __( 'Not Reviewed', 'review-system' );
		}
	};

	const getStatusBackground = ( status ) => {
		switch ( status ) {
			case 'approved':
				return '#d4edda'; // Light green background
			case 'ready_for_review':
				return '#fff3cd'; // Light yellow background
			default:
				return 'transparent';
		}
	};

	useEffect( () => {
		toggleEditorPanelOpened( 'review-panel' );
	}, [] );

	return (
		<PluginDocumentSettingPanel
			name="review-panel"
			title={ __( 'Review Status', 'review-system' ) }
			className="review-panel"
		>
			<div
				className="review-status"
				style={ {
					backgroundColor: getStatusBackground( reviewStatus ),
					padding: '12px',
					borderRadius: '4px',
				} }
			>
				<p>
					{ __( 'Current Status:', 'review-system' ) }{ ' ' }
					<strong>{ getStatusLabel( reviewStatus ) }</strong>
				</p>
				{ ! reviewStatus || reviewStatus === 'approved' ? (
					<Button
						variant="primary"
						onClick={ () =>
							handleStatusChange( 'ready_for_review' )
						}
					>
						{ __( 'Mark as Ready for Review', 'review-system' ) }
					</Button>
				) : (
					<Button
						variant="primary"
						onClick={ () => handleStatusChange( 'approved' ) }
					>
						{ __( 'Mark as Approved', 'review-system' ) }
					</Button>
				) }
			</div>

			{ log && log.length > 0 && (
				<div className="review-log">
					<div
						style={ {
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						} }
					>
						<h4>{ __( 'Status History', 'review-system' ) }</h4>
						<Button
							variant="link"
							onClick={ handleClearHistory }
							style={ { color: '#cc1818' } }
						>
							{ __( 'Clear History', 'review-system' ) }
						</Button>
					</div>
					<ul style={ { listStyle: 'none', padding: 0, margin: 0 } }>
						{ [ ...log ].reverse().map( ( entry, index ) => (
							<li
								key={ index }
								style={ {
									marginBottom: '8px',
									fontSize: '13px',
									color: '#757575',
								} }
							>
								<strong>
									{ getStatusLabel( entry.status ) }
								</strong>{ ' ' }
								by <em>{ entry.user_name }</em> |{ ' ' }
								{ formatDate( entry.timestamp ) }
							</li>
						) ) }
					</ul>
				</div>
			) }
		</PluginDocumentSettingPanel>
	);
};

wp.plugins.registerPlugin( 'review-system', {
	render: ReviewPanel,
	icon: 'yes',
} );
