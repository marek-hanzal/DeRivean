import {playerBranch} from '../selector';

const branch = state => playerBranch(state).pages;

export {
	branch as playerPagesBranch,
};
