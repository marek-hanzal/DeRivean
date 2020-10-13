import {playerPagesBranch} from '../selector';

const branch = state => playerPagesBranch(state).payload;

export {
	branch as playerPagesPayloadBranch,
};
