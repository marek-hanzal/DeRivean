import {createAction} from 'redux-actions';

const
	onPlayerPagesStatus = createAction('ON_PLAYER_PAGES_STATUS', status => status);

export {
	onPlayerPagesStatus,
};
