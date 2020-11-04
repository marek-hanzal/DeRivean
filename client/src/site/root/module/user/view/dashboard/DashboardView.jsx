import BaseDashboardView from "component/view/BaseDashboardView";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<UserView>
			<BaseDashboardView context={UserContext}>
			</BaseDashboardView>
		</UserView>
	);
};

export default DashboardView;
