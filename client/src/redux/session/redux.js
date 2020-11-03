import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

const SessionRedux = {
	open: miniAction("session.open", "user"),
	close: miniAction("session.close", "user", {site: "public"}),
	history: miniAction("session.history", "history", []),
	reducer: function () {
		return reducerSimpleActions([
			this.open,
			this.close,
			this.history,
		], {history: [], user: {site: "public"}});
	},
	selector: {
		branch: state => state.session,
		getUser: state => SessionRedux.selector.branch(state).user,
		getHistory: state => SessionRedux.selector.branch(state).history,
	},
};

export {
	SessionRedux,
};
