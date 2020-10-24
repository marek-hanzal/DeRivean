import {SmileOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import {withTranslation} from "react-i18next";
import RootView from "site/root/view/RootView";

const HomeView = ({t}) =>
	<RootView
		id={"root.home"}
	>
		<Card title={t("root.home.title")}>
			<Result
				icon={<SmileOutlined/>}
				status={"info"}
				title={t("root.home.content.title")}
				subTitle={t("root.home.content.subtitle")}
			/>
		</Card>
	</RootView>
;
export default withTranslation()(HomeView);
