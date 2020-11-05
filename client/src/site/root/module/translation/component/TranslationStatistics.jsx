import {StatisticsRedux} from "redux/statistics/redux";
import OverallStatistics from "site/root/component/OverallStatistics";

const TranslationStatistics = () => {
	return <OverallStatistics show={["translations"]} action={cancelToken => StatisticsRedux.redux.statistics.dispatch.statistics(cancelToken)}/>;
};

export default TranslationStatistics;
