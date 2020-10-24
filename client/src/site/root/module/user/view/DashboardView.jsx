import {Card} from "antd";
import {withTranslation} from "react-i18next";
import UserView from "site/root/module/user/view/UserView";

const DashboardView = ({t}) =>
	<UserView id={"root.user.dashboard"}>
		<Card title={t(`root.user.dashboard.title`)}>
		</Card>
	</UserView>
;

export default withTranslation()(DashboardView);
