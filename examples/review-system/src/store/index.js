import { createReduxStore, register } from '@wordpress/data';
import * as actions from './actions';
import * as selectors from './selectors';
import * as resolvers from './resolvers';
import reducer from './reducer';

const reviewStore = createReduxStore( 'review-system/review', {
	reducer,
	actions,
	selectors,
	resolvers,
} );

register( reviewStore );
