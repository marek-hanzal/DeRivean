import {entityPageBranch} from '../selector';

const branch = state => entityPageBranch(state).status;

/**
 * Is client data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

/**
 * Checks if entity pages is in success state.
 *
 * @param state
 * @returns {boolean}
 */
const isEntityPageSuccess = state => branch(state) === 'SUCCESS';

/**
 * Checks if entity pages is in failure state.
 *
 * @param state
 * @returns {boolean}
 */
const isEntityPageFailure = state => branch(state) === 'FAILURE';

export {
	branch as entityPagesStatusBranch,
	isLoading,
	isEntityPageSuccess,
	isEntityPageFailure,
};
