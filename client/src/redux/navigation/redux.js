import isEmpty from "is-empty";
import omitEmpty from "omit-empty";
import {useDispatch} from "react-redux";
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

const useNavigationParams = params => {
	const dispatch = useDispatch();
	params = omitEmpty(params);
	if (!isEmpty(params)) {
		dispatch(NavigationRedux.params(params));
	}
};

export {
	NavigationRedux,
	useNavigationParams,
};
