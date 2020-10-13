const branch = state => state.discovery.status;

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
