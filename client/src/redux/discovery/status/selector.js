const branch = state => state.discovery.status;

/**
 * is discovery data being loaded?
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === 'LOADING';

export {
	isLoading,
};
