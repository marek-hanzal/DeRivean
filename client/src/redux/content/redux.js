import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

const ContentRedux = {
	setFullsize: miniAction("content.fullsize", "fullsize", false),
	reducer: function () {
		return reducerSimpleActions(
			[
				this.setFullsize,
			],
			{
				fullsize: false,
			}
		);
	},
	selector: {
		branch: state => state.content,
		isFullsize: state => ContentRedux.selector.branch(state).fullsize,
	},
};

export {
	ContentRedux,
};
