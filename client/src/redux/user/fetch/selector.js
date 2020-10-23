import { userBranch } from "redux/user/selector";

const branch = state => userBranch(state).fetch;

const isUserFetchLoading = state => branch(state).loading;

const getUserFetchStatus = state => branch(state).status;

const getUserFetchError = state => branch(state).error.data.error;

const getUserFetch = state => branch(state).payload;

export {
	branch as userFetchBranch,
	getUserFetchStatus,
	getUserFetchError,
	isUserFetchLoading,
	getUserFetch,
};
