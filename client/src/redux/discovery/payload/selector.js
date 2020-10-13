const branch = state => state.discovery.payload;

const getStatisticsUrl = state => branch(state).index['invoice'].link;

export {
	getStatisticsUrl,
};
