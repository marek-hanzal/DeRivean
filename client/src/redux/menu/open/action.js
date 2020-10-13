import {createAction} from 'redux-actions';

const
	onOpenMenu = createAction('ON_OPEN_MENU', open => open);

export {
	onOpenMenu,
};
