import {discoveryBranch} from "redux/discovery/selector";

const branch = state => discoveryBranch(state).payload;

const getDiscoveryIndex = state => branch(state).index;

const getPlayerGroup = state => getDiscoveryIndex(state).player;

const getPlayerPageHref = state => getPlayerGroup(state).page.link;

const getEntityGroup = state => getDiscoveryIndex(state).entity;

const getEntityPageHref = state => getEntityGroup(state).page.link;

const getUserGroup = state => getDiscoveryIndex(state).user;

const getUserCreateHref = state => getUserGroup(state).create.link;

const getUserLoginHref = state => getUserGroup(state).login.link;

export {
	branch as discoveryPayloadBranch,
	getDiscoveryIndex,
	getPlayerGroup,
	getPlayerPageHref,
	getEntityGroup,
	getEntityPageHref,
	getUserGroup,
	getUserCreateHref,
	getUserLoginHref,
};
