import {clientBranch} from '../selector';

const branch = state => clientBranch(state).status;

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
	branch as clientStatusBranch,
	isLoading,
	isClientSuccess,
	isClientFailure,
};
