import {menuBranch} from "redux/menu/selector";

const branch = state => menuBranch(state).collapse;

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
