import miniAction from "utils/action/actions/miniAction";

const
	onMenuCollapse = miniAction("menu.collapse", "collapse"),
	onMenuOpen     = miniAction("menu.open", "open"),
	onMenuItems    = miniAction("menu.items", "items");

export {
	onMenuCollapse,
	onMenuOpen,
	onMenuItems,
};
