import {playerBranch} from "redux/player/selector";

const branch = state => playerBranch(state).page;

export {
	branch as playerPageBranch,
};
