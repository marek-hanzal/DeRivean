import { SmileOutlined } from "@ant-design/icons";
import {
	Card,
	Result
} from "antd";
import WithMenu from "component/view/WithMenu";
import React from "react";
import { withTranslation } from "react-i18next";
import RootMenu from "site/root/site/RootMenu";

const HomeView = ({t}) =>
	<WithMenu menu={RootMenu()}>
		<Card title={t("root.home.title")}>
			<Result
				icon={<SmileOutlined/>}
				status={"success"}
				title={t("root.home.content.title")}
				subTitle={t("root.home.content.subtitle")}
			/>
		</Card>
	</WithMenu>
;
export default withTranslation()(HomeView);
