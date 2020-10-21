import {entityBranch} from "redux/entity/selector";

const branch = state => entityBranch(state).page;

const isEntityPageLoading = state => branch(state).loading;

const getEntityPage = state => branch(state).payload;

export {
	branch as entityPageBranch,
	isEntityPageLoading,
	getEntityPage,
};
