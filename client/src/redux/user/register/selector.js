import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

const isUserRegisterLoading = state => branch(state).loading;

const getUserRegisterStatus = state => branch(state).status;

const getUserRegister = state => branch(state).payload;

const getUserRegisterError = state => branch(state).error;

export {
	branch as userRegisterBranch,
	getUserRegisterStatus,
	isUserRegisterLoading,
	getUserRegister,
	getUserRegisterError,
};
