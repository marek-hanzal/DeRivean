import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

const branch = state => state.navigation;

const NavigationRedux = {
	params: miniAction("navigation.params", "params"),
	reducer: function () {
		return reducerSimpleActions(
			[
				this.params,
			],
			{
				params: {},
			}
		);
	},
	selector: {
		params: state => branch(state).params,
	}
};

export {
	NavigationRedux,
};
