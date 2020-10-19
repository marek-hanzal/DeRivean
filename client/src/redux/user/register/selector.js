import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

const isUserRegisterLoading = state => branch(state).status !== null;

const getUserRegisterStatus = state => branch(state).status;

const getUserRegisterError = state => branch(state).error.data.error;

const getUserRegisterRequest = state => branch(state).request;

const getUserRegisterUser = state => branch(state).register;

export {
	branch as userRegisterBranch,
	getUserRegisterStatus,
	getUserRegisterError,
	isUserRegisterLoading,
	getUserRegisterRequest,
	getUserRegisterUser,
};
