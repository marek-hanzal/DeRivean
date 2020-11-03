import BaseDashboardView from "component/view/BaseDashboardView";
import {UserContext, UserView} from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<UserView>
			<BaseDashboardView context={UserContext}>
				<h1>some content here</h1>
			</BaseDashboardView>
		</UserView>
	);
};

export default DashboardView;
