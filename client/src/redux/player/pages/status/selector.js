import {playerPagesBranch} from '../selector';

const branch = state => playerPagesBranch(state).status;

/**
 * Is client data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

/**
 * Checks if player pages is in success state.
 *
 * @param state
 * @returns {boolean}
 */
const isPlayerPagesSuccess = state => branch(state) === 'SUCCESS';

/**
 * Checks if player pages is in failure state.
 *
 * @param state
 * @returns {boolean}
 */
const isPlayerPagesFailure = state => branch(state) === 'FAILURE';

export {
	branch as playerPagesStatusBranch,
	isLoading,
	isPlayerPagesSuccess,
	isPlayerPagesFailure,
};
