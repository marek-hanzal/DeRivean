import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

const branch = state => state.menu;

const MenuRedux = {
	collapse: miniAction("menu.collapse", "collapsed"),
	select: miniAction("menu.select", "selected"),
	open: miniAction("menu.open", "opened"),
	reducer: function () {
		return reducerSimpleActions(
			[
				this.collapse,
				this.select,
				this.open,
			],
			{
				collapsed: false,
				selected: [],
				opened: [],
			}
		);
	},
	selector: {
		/**
		 * is the main menu collapsed?
		 *
		 * @param state
		 * @returns {boolean}
		 */
		isCollapsed: state => branch(state).collapsed,
		/**
		 * Return currently selected menu item.
		 *
		 * @returns: string
		 */
		getSelected: state => branch(state).selected,
		/**
		 * Return currently opened menu item (submenu)
		 *
		 * @return string
		 */
		getOpened: state => branch(state).opened,
	},
};

export {
	MenuRedux,
};
