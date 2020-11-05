import BaseDashboardView from "component/view/BaseDashboardView";
import OverallStatistics from "site/root/component/OverallStatistics";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<UserView>
			<BaseDashboardView context={UserContext}>
				<OverallStatistics exclude={["translations"]}/>
			</BaseDashboardView>
		</UserView>
	);
};

export default DashboardView;
