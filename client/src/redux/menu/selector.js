const branch = state => state.menu;

/**
 * is the main menu collapsed?
 *
 * @param state
 * @returns {boolean}
 */
const isMenuCollapsed = state => branch(state).collapse;

/**
 * return an array of opened menu items
 *
 * @param state
 * @returns {string[]}
 */
const getMenuOpen = state => branch(state).open;

/**
 * Return currently selected menu item.
 *
 * @returns: string
 */
const getMenuItem = state => branch(state).item;

export {
	branch as menuBranch,
	isMenuCollapsed,
	getMenuOpen,
	getMenuItem,
};
