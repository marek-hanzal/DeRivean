import Axios from 'axios';
import {createAction} from 'redux-actions';
import {onLoading} from '../../loading/action';
import {onDiscoveryStatus} from '../status/action';

const
	onDiscoveryRequest = createAction('ON_DISCOVERY_REQUEST', () => null),
	onDiscoverySuccess = createAction('ON_DISCOVERY_SUCCESS', discovery => discovery),
	onDiscoveryFailure = createAction('ON_DISCOVERY_FAILURE', error => error),
	onDiscovery = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onDiscoveryStatus('LOADING'));
		dispatch(onDiscoveryRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onDiscoverySuccess(response.data));
				dispatch(onDiscoveryStatus('SUCCESS'));
				dispatch(onLoading(false));
			})
			.catch(error => {
				dispatch(onDiscoveryFailure(error));
				dispatch(onDiscoveryStatus('FAILURE'));
				dispatch(onLoading(false));
			});
	};

export {
	onDiscoveryRequest,
	onDiscoverySuccess,
	onDiscoveryFailure,
	onDiscovery,
};
