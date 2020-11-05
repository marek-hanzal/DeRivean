import BaseDashboardView from "component/view/BaseDashboardView";
import {StatisticsRedux} from "redux/statistics/redux";
import OverallStatistics from "site/root/component/OverallStatistics";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<UserView>
			<BaseDashboardView context={UserContext}>
				<OverallStatistics exclude={["translations"]} action={cancelToken => StatisticsRedux.redux.statistics.dispatch.statistics(cancelToken)}/>
			</BaseDashboardView>
		</UserView>
	);
};

export default DashboardView;
