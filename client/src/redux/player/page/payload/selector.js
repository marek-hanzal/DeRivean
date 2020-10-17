import {playerPageBranch} from "redux/player/page/selector";

const branch = state => playerPageBranch(state).payload;

const getPlayerPage = state => branch(state);

export {
	branch as playerPagePayloadBranch,
	getPlayerPage,
};
