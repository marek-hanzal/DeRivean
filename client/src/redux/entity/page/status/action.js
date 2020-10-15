import {createAction} from 'redux-actions';

const
	onEntityPageStatus = createAction('ON_ENTITY_PAGE_STATUS', status => status);

export {
	onEntityPageStatus,
};
