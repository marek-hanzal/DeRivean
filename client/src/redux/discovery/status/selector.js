import {discoveryBranch} from '../selector';

const branch = state => discoveryBranch(state).status;

/**
 * is discovery data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

/**
 * Checks if discovery is in success state.
 *
 * @param state
 * @returns {boolean}
 */
const isDiscoverySuccess = state => branch(state) === 'SUCCESS';

const isDiscoveryFailure = state => branch(state) === 'FAILURE';

export {
	branch as discoveryStateBranch,
	isLoading,
	isDiscoverySuccess,
	isDiscoveryFailure,
};
