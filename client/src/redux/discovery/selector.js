const branch = state => state.discovery;

const getDiscoveryStatus = state => branch(state).status;

const getDiscoveryIndex = state => branch(state).payload;

const getEntityGroup = state => getDiscoveryIndex(state);
const getEntityPageHref = state => getEntityGroup(state)["root.entity.page"].link;

const getUserGroup = state => getDiscoveryIndex(state);

const getUserCreateHref = state => getUserGroup(state)["public.user.register"].link;
const getUserLoginHref = state => getUserGroup(state)["public.user.login"].link;

const getUserPageHref = state => getUserGroup(state)["root.user.page"].link;
const getUserFetchHref = (state, uuid) => getUserGroup(state)["root.user.fetch"].link.replace("{id}", uuid);

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
