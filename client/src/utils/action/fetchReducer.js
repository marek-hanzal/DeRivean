import reducerActions from "utils/action/reducerActions";

const fetchReducer = (actions, extra = [], payload = null) => {
	return reducerActions([
		actions.request,
		actions.success,
		actions.failure,
	].concat(extra), payload);
};

export default fetchReducer;
