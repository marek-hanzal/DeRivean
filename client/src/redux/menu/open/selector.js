import {menuBranch} from "redux/menu/selector";

const branch = state => menuBranch(state).open;

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
