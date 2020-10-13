import Axios from 'axios';
import {createAction} from 'redux-actions';
import {onLoading} from '../../../loading/action';
import {onPlayerPagesStatus} from '../status/action';

const
	onPlayerPagesRequest = createAction('ON_PLAYER_PAGES_REQUEST', () => null),
	onPlayerPagesSuccess = createAction('ON_PLAYER_PAGES_SUCCESS', client => client),
	onPlayerPagesFailure = createAction('ON_PLAYER_PAGES_FAILURE', error => error),
	onPlayerPages = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onPlayerPagesStatus('LOADING'));
		dispatch(onPlayerPagesRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onPlayerPagesSuccess(response.data));
				dispatch(onPlayerPagesStatus('SUCCESS'));
				dispatch(onLoading(false));
			})
			.catch(error => {
				dispatch(onPlayerPagesFailure(error));
				dispatch(onPlayerPagesStatus('FAILURE'));
				dispatch(onLoading(false));
			});
	};

export {
	onPlayerPagesRequest,
	onPlayerPagesSuccess,
	onPlayerPagesFailure,
	onPlayerPages,
};
