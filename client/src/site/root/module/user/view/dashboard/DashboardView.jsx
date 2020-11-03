import BaseDashboardView from "component/view/BaseDashboardView";
import {BaseUserView, UserContext} from "site/root/module/user/view/BaseUserView";

const DashboardView = () => {
	return (
		<BaseUserView>
			<BaseDashboardView
				context={UserContext}
			>
				<h1>some content here</h1>
			</BaseDashboardView>
		</BaseUserView>
	);
};

export default DashboardView;
