import {clientBranch} from "redux/client/selector";

const branch = state => clientBranch(state).payload;

/**
 * return current backend discovery url
 *
 * @param state
 * @returns {string}
 */
const getDiscoveryHref = state => branch(state).discovery;

export {
	branch as clientPayloadBranch,
	getDiscoveryHref,
};
