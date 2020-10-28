const branch = state => state.loading;

const LoadingSelector = {
	/**
	 * if there is a need to show loading state for the application
	 *
	 * @param state
	 * @returns {boolean}
	 */
	isLoading: state => branch(state).state !== 0,
};

export default LoadingSelector;
