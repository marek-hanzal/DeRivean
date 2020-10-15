import Axios from 'axios';
import buildUrl from 'build-url';
import {createAction} from 'redux-actions';
import {getPlayerPageHref} from '../../../discovery/payload/selector';
import {onPlayerPageStatus} from '../status/action';

const
	onPlayerPageRequest = createAction('ON_PLAYER_PAGE_REQUEST', () => null),
	onPlayerPageSuccess = createAction('ON_PLAYER_PAGE_SUCCESS', pages => pages),
	onPlayerPageFailure = createAction('ON_PLAYER_PAGE_FAILURE', error => error),
	onPlayerPage = (page, size = 100) => (dispatch, getState) => {
		const href = buildUrl(getPlayerPageHref(getState()).replace('{page}', page), {
			queryParams: {
				limit: size,
			}
		});
		dispatch(onPlayerPageStatus('LOADING'));
		dispatch(onPlayerPageRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onPlayerPageSuccess(response.data));
				dispatch(onPlayerPageStatus('SUCCESS'));
			})
			.catch(error => {
				dispatch(onPlayerPageFailure(error));
				dispatch(onPlayerPageStatus('FAILURE'));
			});
	};

export {
	onPlayerPageRequest,
	onPlayerPageSuccess,
	onPlayerPageFailure,
	onPlayerPage,
};
