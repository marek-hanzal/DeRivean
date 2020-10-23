import {onMenuCollapse, onMenuSelect} from "redux/menu/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions(
	[
		onMenuCollapse,
		onMenuSelect,
	],
	{
		item: null,
		collapse: false
	}
);
