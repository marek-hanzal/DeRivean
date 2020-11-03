import {handleActions} from "redux-actions";
import miniAction from "utils/action/actions/miniAction";

const LoadingRedux = {
	start: miniAction("loading.start", "state"),
	finish: miniAction("loading.finish", "state"),
	reducer: function () {
		return handleActions({
			[this.start]: state => ({state: state.state + 1}),
			[this.finish]: state => ({state: state.state - 1}),
		}, {state: 0});
	},
	selector: {
		branch: state => state.loading,
		/**
		 * if there is a need to show loading state for the application
		 *
		 * @param state
		 * @returns {boolean}
		 */
		isLoading: state => LoadingRedux.selector.branch(state).state !== 0,
	},
};

export {
	LoadingRedux,
};
