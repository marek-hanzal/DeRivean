const branch = state => state.menu;

/**
 * is the main menu collapsed?
 *
 * @param state
 * @returns {boolean}
 */
const isMenuCollapsed = state => branch(state).collapse;

/**
 * Return currently selected menu item.
 *
 * @returns: string
 */
const getMenuSelect = state => branch(state).select;

/**
 * Return currently opened menu item (submenu)
 *
 * @return string
 */
const getMenuOpen = state => branch(state).open;

export {
	branch as menuBranch,
	isMenuCollapsed,
	getMenuSelect,
	getMenuOpen,
};
