import Axios from 'axios';
import buildUrl from 'build-url';
import {createAction} from 'redux-actions';
import {getEntityPageHref} from '../../../discovery/payload/selector';
import {onEntityPageStatus} from '../status/action';

const
	onEntityPageRequest = createAction('ON_ENTITY_PAGE_REQUEST', () => null),
	onEntityPageSuccess = createAction('ON_ENTITY_PAGE_SUCCESS', pages => pages),
	onEntityPageFailure = createAction('ON_ENTITY_PAGE_FAILURE', error => error),
	onEntityPage = (page, size = 100) => (dispatch, getState) => {
		const href = buildUrl(getEntityPageHref(getState()).replace('{page}', page), {
			queryParams: {
				limit: size,
			}
		});
		dispatch(onEntityPageStatus('LOADING'));
		dispatch(onEntityPageRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onEntityPageSuccess(response.data));
				dispatch(onEntityPageStatus('SUCCESS'));
			})
			.catch(error => {
				dispatch(onEntityPageFailure(error));
				dispatch(onEntityPageStatus('FAILURE'));
			});
	};

export {
	onEntityPageRequest,
	onEntityPageSuccess,
	onEntityPageFailure,
	onEntityPage,
};