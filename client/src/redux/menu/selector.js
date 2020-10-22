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
const getOpenMenu = state => branch(state).open;

export {
	branch as menuBranch,
	isMenuCollapsed,
	getOpenMenu,
};
