import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const StatisticsRedux = CreateRedux({
	statistics: CreateLinkRedux("statistics", "statistics", "root.statistics"),
});

export {
	StatisticsRedux,
};
