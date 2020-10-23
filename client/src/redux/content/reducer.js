import {onContentFullsize} from "redux/content/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions(
	[
		onContentFullsize,
	],
	{
		fullsize: false,
	}
);
