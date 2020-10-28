import {handleActions} from "redux-actions";
import Loading from "redux/loading/action";

export default handleActions({
	[Loading.start]: state => ({state: state.state + 1}),
	[Loading.finish]: state => ({state: state.state - 1}),
}, {state: 0});
