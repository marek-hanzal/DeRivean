import {entityBranch} from '../selector';

const branch = state => entityBranch(state).page;

export {
	branch as entityPageBranch,
};
