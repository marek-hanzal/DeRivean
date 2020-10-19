import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

const isUserRegisterSuccess = state => branch(state).status === "SUCCESS";

const isUserRegisterFailure = state => branch(state).status === "FAILURE";

const getUserRegisterStatus = state => branch(state).status;

export {
	branch as userRegisterBranch,
	isUserRegisterSuccess,
	isUserRegisterFailure,
	getUserRegisterStatus,
};
