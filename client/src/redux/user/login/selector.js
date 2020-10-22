import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).login;

const isUserLoginLoading = state => branch(state).loading;

const getUserLoginStatus = state => branch(state).status;

const getUserLoginError = state => branch(state).error.data.error;

const getUserLoginUser = state => branch(state).payload;

export {
	branch as userLoginBranch,
	getUserLoginStatus,
	getUserLoginError,
	isUserLoginLoading,
	getUserLoginUser,
};
