const branch = state => state.client.status;

/**
 * is client data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

export {
	isLoading,
};
