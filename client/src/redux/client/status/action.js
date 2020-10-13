import {createAction} from 'redux-actions';

const
	onClientStatus = createAction('ON_CLIENT_STATUS', status => status);

export {
	onClientStatus,
};
