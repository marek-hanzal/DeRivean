const branch = state => state.menu.open;

/**
 * return an array of opened menu items
 *
 * @param state
 * @returns {string[]}
 */
const getOpenMenu = state => branch(state);

export {
	getOpenMenu,
};
