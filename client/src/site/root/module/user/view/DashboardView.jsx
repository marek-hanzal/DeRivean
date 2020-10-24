import BaseDashboardView from "component/view/BaseDashboardView";
import {withTranslation} from "react-i18next";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = ({t}) =>
	<BaseDashboardView
		base={UserView}
		id={"root.user"}
		icon={<UserDashboardIcon/>}
	>
		<h1>some content here</h1>
	</BaseDashboardView>
;

export default withTranslation()(DashboardView);
