const fetchSelector = (branch) => {
	return {
		isLoading: state => branch(state).loading,
		getStatus: state => branch(state).status,
		getError: state => branch(state).error,
		getPayload: state => branch(state).payload,
	};
};

export default fetchSelector;
