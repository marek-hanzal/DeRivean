import {playerBranch} from '../selector';

const branch = state => playerBranch(state).page;

export {
	branch as playerPageBranch,
};
