import {
	onMenuCollapse,
	onMenuItems,
	onMenuOpen
} from "redux/menu/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions(
	[
		onMenuCollapse,
		onMenuOpen,
		onMenuItems,
	],
	{
		open:     [],
		items:    [],
		collapse: false
	}
);
