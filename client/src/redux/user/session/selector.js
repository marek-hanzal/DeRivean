import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).session;

export {
	branch as userSessionBranch,
};
