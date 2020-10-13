const branch = state => state.menu.collapse;

/**
 * is the main menu collapsed?
 *
 * @param state
 * @returns {boolean}
 */
const isMenuCollapsed = state => branch(state) === true;

export {
	isMenuCollapsed,
};
