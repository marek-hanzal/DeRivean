import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).login;

const isUserLoginLoading = state => branch(state).status !== null;

const getUserLoginStatus = state => branch(state).status;

const getUserLoginError = state => branch(state).error.data.error;

const getUserLoginUser = state => branch(state).user;

export {
	branch as userRegisterBranch,
	getUserLoginStatus,
	getUserLoginError,
	isUserLoginLoading,
	getUserLoginUser,
};
