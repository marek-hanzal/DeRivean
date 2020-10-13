const branch = state => state.client.payload;

/**
 * return current backend discovery url
 *
 * @param state
 * @returns {string}
 */
const getDiscoveryHref = state => branch(state).discovery;

export {
	getDiscoveryHref,
};
