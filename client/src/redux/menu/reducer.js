import {onMenuCollapse, onMenuOpen, onMenuSelect} from "redux/menu/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions(
	[
		onMenuCollapse,
		onMenuSelect,
		onMenuOpen,
	],
	{
		select: [],
		open: [],
		collapse: false
	}
);
