import {createAction} from 'redux-actions';

const
	onStatus = createAction('ON_STATUS', status => status);

export {
	onStatus,
};
