import {playerPageBranch} from '../selector';

const branch = state => playerPageBranch(state).payload;

const getPlayerPage = state => branch(state);

export {
	branch as playerPagePayloadBranch,
	getPlayerPage,
};
