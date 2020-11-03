import miniAction from "utils/action/actions/miniAction";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

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
		branch: state => state.menu,
		/**
		 * is the main menu collapsed?
		 *
		 * @param state
		 * @returns {boolean}
		 */
		isCollapsed: state => MenuRedux.selector.branch(state).collapsed,
		/**
		 * Return currently selected menu item.
		 *
		 * @returns: string
		 */
		getSelected: state => MenuRedux.selector.branch(state).selected,
		/**
		 * Return currently opened menu item (submenu)
		 *
		 * @return string
		 */
		getOpened: state => MenuRedux.selector.branch(state).opened,
	},
};

export {
	MenuRedux,
};
