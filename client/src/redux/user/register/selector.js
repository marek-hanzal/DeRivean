import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).register;

export {
	branch as userRegisterBranch,
};
