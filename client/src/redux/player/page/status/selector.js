import {playerPageBranch} from "redux/player/page/selector";

const branch = state => playerPageBranch(state).status;

/**
 * Is client data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === "LOADING";

/**
 * Checks if player pages is in success state.
 *
 * @param state
 * @returns {boolean}
 */
const isPlayerPageSuccess = state => branch(state) === "SUCCESS";

/**
 * Checks if player pages is in failure state.
 *
 * @param state
 * @returns {boolean}
 */
const isPlayerPageFailure = state => branch(state) === "FAILURE";

export {
	branch as playerPagesStatusBranch,
	isLoading,
	isPlayerPageSuccess,
	isPlayerPageFailure,
};
