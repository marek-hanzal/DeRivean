const branch = state => state.client;

const getClientStatus = state => branch(state).status;

/**
 * return current backend discovery url
 *
 * @param state
 * @returns {string}
 */
const getDiscoveryHref = state => branch(state).payload.discovery;

export {
	branch as clientPayloadBranch,
	getClientStatus,
	getDiscoveryHref,
};
