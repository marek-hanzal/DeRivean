import {entityPageBranch} from "redux/entity/page/selector";

const branch = state => entityPageBranch(state).payload;

const getEntityPage = state => branch(state);

export {
	branch as entityPagePayloadBranch,
	getEntityPage,
};
