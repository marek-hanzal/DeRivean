import {createAction} from 'redux-actions';

const
	onDiscoveryStatus = createAction('ON_DISCOVERY_STATUS', status => status);

export {
	onDiscoveryStatus,
};
