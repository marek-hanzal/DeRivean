import Axios from 'axios';
import {createAction} from 'redux-actions';
import {onLoading} from '../../loading/action';
import {onStatus} from '../status/action';

const
	onDiscoveryRequest = createAction('ON_DISCOVERY_REQUEST', () => null),
	onDiscoverySuccess = createAction('ON_DISCOVERY_SUCCESS', discovery => discovery),
	onDiscoveryFailure = createAction('ON_DISCOVERY_FAILURE', error => error),
	onDiscovery = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onStatus('LOADING'));
		dispatch(onDiscoveryRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onDiscoverySuccess(response.data));
				dispatch(onStatus('SUCCESS'));
				dispatch(onLoading(false));
			})
			.catch(error => {
				dispatch(onDiscoveryFailure(error));
				dispatch(onStatus('FAILURE'));
				dispatch(onLoading(false));
			});
	};

export {
	onDiscoveryRequest,
	onDiscoverySuccess,
	onDiscoveryFailure,
	onDiscovery,
};
