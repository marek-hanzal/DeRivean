import {createAction} from "redux-actions";

const
	onMenuCollapse = createAction("ON_MENU_COLLAPSE", isCollapsed => ({collapse: isCollapsed})),
	onMenuOpen = createAction("ON_OPEN_MENU", open => ({open: open}));

export {
	onMenuCollapse,
	onMenuOpen,
};
