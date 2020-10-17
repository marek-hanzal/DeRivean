import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).registerStatus;

/**
 * Is data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === "LOADING";

/**
 * Checks for success.
 *
 * @param state
 * @returns {boolean}
 */
const isUserRegisterSuccess = state => branch(state) === "SUCCESS";

/**
 * Checks for failure.
 *
 * @param state
 * @returns {boolean}
 */
const isUserRegisterFailure = state => branch(state) === "FAILURE";

export {
	branch as userRegisterStatusBranch,
	isLoading,
	isUserRegisterSuccess,
	isUserRegisterFailure,
};
