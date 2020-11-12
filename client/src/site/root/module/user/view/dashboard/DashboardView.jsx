import BaseDashboardView from "component/view/BaseDashboardView";
import OverallStatistics from "site/root/component/OverallStatistics";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<UserView>
			<BaseDashboardView>
				<OverallStatistics exclude={["translations"]}/>
			</BaseDashboardView>
		</UserView>
	);
};

export default DashboardView;
