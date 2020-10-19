import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

const isUserRegisterSuccess = state => branch(state).status === "SUCCESS";

const isUserRegisterFailure = state => branch(state).status === "FAILURE";

const isUserRegisterLoading = state => branch(state).status !== null;

const getUserRegisterStatus = state => branch(state).status;

const getUserRegisterError = state => branch(state).error.data.error;

const getUserRegisterRequest = state => branch(state).request;

export {
	branch as userRegisterBranch,
	isUserRegisterSuccess,
	isUserRegisterFailure,
	getUserRegisterStatus,
	getUserRegisterError,
	isUserRegisterLoading,
	getUserRegisterRequest,
};
