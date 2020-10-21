import {userBranch} from "redux/user/selector";

const branch = state => userBranch(state).page;

const isUserPageLoading = state => branch(state).loading;

const getUserPage = state => branch(state).payload;

export {
	branch as userPageBranch,
	isUserPageLoading,
	getUserPage,
};
