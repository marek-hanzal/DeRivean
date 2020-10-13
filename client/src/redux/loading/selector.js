const branch = state => state.loading;

/**
 * if there is a need to show loading state for the application
 *
 * @param state
 * @returns {boolean}
 */
const isLoading = state => branch(state) === true;

export {
	isLoading,
};
