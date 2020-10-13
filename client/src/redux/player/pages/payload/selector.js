import {playerPagesBranch} from '../selector';

const branch = state => playerPagesBranch(state).payload;

const getPlayerPages = state => branch(state);
const getPlayerPagesHrefs = state => branch(state).hrefs;

export {
	branch as playerPagesPayloadBranch,
	getPlayerPages,
	getPlayerPagesHrefs,
};
