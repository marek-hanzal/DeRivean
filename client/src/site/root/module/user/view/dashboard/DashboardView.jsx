import BaseDashboardView from "component/view/BaseDashboardView";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={UserView}
			id={"root.user"}
			icon={<UserIcon/>}
		>
			<h1>some content here</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
