const branch = state => state.discovery;

const getDiscoveryStatus = state => branch(state).status;

const getDiscoveryIndex = state => branch(state).payload.index;

const getEntityGroup = state => getDiscoveryIndex(state).entity;
const getEntityPageHref = state => getEntityGroup(state).page.link;

const getUserGroup = state => getDiscoveryIndex(state).user;
const getUserCreateHref = state => getUserGroup(state).create.link;
const getUserLoginHref = state => getUserGroup(state).login.link;
const getUserPageHref = state => getUserGroup(state).page.link;
const getUserFetchHref = (state, uuid) => getUserGroup(state).fetch.link.replace("{id}", uuid);

export {
	branch as discoveryBranch,
	getDiscoveryStatus,
	getDiscoveryIndex,
	getEntityGroup,
	getEntityPageHref,
	getUserGroup,
	getUserCreateHref,
	getUserLoginHref,
	getUserPageHref,
	getUserFetchHref,
};
