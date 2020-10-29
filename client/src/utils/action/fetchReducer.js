import reducerActions from "utils/action/reducerActions";

const fetchReducer = (actions, extra = []) => {
	return reducerActions([
		actions.request,
		actions.success,
		actions.failure,
	].concat(extra));
};

export default fetchReducer;
