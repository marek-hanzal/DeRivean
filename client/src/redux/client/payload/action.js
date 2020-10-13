import Axios from 'axios';
import {createAction} from 'redux-actions';
import {onLoading} from '../../loading/action';
import {onClientStatus} from '../status/action';

const
	onClientRequest = createAction('ON_CLIENT_REQUEST', () => null),
	onClientSuccess = createAction('ON_CLIENT_SUCCESS', client => client),
	onClientFailure = createAction('ON_CLIENT_FAILURE', error => error),
	onClient = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onClientStatus('LOADING'));
		dispatch(onClientRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onClientSuccess(response.data));
				dispatch(onClientStatus('SUCCESS'));
				dispatch(onLoading(false));
			})
			.catch(error => {
				dispatch(onClientFailure(error));
				dispatch(onClientStatus('FAILURE'));
				dispatch(onLoading(false));
			});
	};

export {
	onClientRequest,
	onClientSuccess,
	onClientFailure,
	onClient,
};
