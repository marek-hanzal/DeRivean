const branch = state => state.client.status;

/**
 * Is client data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

/**
 * Checks if client is in success state.
 *
 * @param state
 * @returns {boolean}
 */
const isClientSuccess = state => branch(state) === 'SUCCESS';

/**
 * Checks if client is in failure state.
 *
 * @param state
 * @returns {boolean}
 */
const isClientFailure = state => branch(state) === 'FAILURE';

export {
	isLoading,
	isClientSuccess,
	isClientFailure,
};
