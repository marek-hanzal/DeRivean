import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

const isUserRegisterLoading = state => branch(state).loading;

const getUserRegisterStatus = state => branch(state).status;

const getUserRegisterError = state => branch(state).error.data.error;

const getUserRegister = state => branch(state).payload;

export {
	branch as userRegisterBranch,
	getUserRegisterStatus,
	getUserRegisterError,
	isUserRegisterLoading,
	getUserRegister,
};
