import {createAction} from "redux-actions";

const
	onMenuCollapse = createAction("ON_MENU_COLLAPSE", isCollapsed => isCollapsed);

export {
	onMenuCollapse,
};
