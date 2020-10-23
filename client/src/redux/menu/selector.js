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
 * Return current menu items; when changed, main menu should be re-rendered.
 *
 * @returns: array
 */
const getMenuItems = state => branch(state).items;

/**
 * Say, if the menu is available (visible).
 *
 * @returns boolean
 */
const isMenu = state => branch(state).items !== null;

export {
	branch as menuBranch,
	isMenuCollapsed,
	getMenuOpen,
	getMenuItems,
	isMenu,
};
