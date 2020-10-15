import {discoveryBranch} from '../selector';

const branch = state => discoveryBranch(state).payload;

const getDiscoveryIndex = state => branch(state).index;

const getPlayerGroup = state => getDiscoveryIndex(state).player;

const getPlayerPageHref = state => getPlayerGroup(state).page.link;

export {
	branch as discoveryPayloadBranch,
	getDiscoveryIndex,
	getPlayerGroup,
	getPlayerPageHref,
};
