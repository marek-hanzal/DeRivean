import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

const SessionRedux = {
	open: miniAction("session.open", "user"),
	close: miniAction("session.close", "user", {site: "public"}),
	reducer: function () {
		return reducerSimpleActions([
			this.open,
			this.close,
		], {user: {site: "public"}});
	},
	selector: {
		branch: state => state.session,
		getSession: state => SessionRedux.selector.branch(state),
	},
};

export default SessionRedux;
