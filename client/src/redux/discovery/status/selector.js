const branch = state => state.discovery.status;

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
	isLoading,
	isDiscoverySuccess,
	isDiscoveryFailure,
};
