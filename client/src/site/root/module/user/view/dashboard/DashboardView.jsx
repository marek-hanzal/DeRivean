import BaseDashboardView from "component/view/BaseDashboardView";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import RootView from "site/root/view/RootView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={RootView}
			id={"root.user"}
			icon={<UserIcon/>}
		>
			<h1>some content here</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
