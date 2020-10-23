import miniAction from "utils/action/actions/miniAction";

const
	onMenuCollapse = miniAction("menu.collapse", "collapse"),
	onMenuSelect = miniAction("menu.select", "item");

export {
	onMenuCollapse,
	onMenuSelect,
};
