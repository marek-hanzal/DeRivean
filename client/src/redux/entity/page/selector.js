import {entityBranch} from "redux/entity/selector";

const branch = state => entityBranch(state).page;

export {
	branch as entityPageBranch,
};
