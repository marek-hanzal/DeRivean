import miniAction from "utils/action/actions/miniAction";

const
	onMenuCollapse = miniAction("menu.collapse", "collapse"),
	onMenuSelect = miniAction("menu.select", "select"),
	onMenuOpen = miniAction("menu.open", "open");

export {
	onMenuCollapse,
	onMenuSelect,
	onMenuOpen,
};
