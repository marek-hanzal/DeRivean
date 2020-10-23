import { SmileOutlined } from "@ant-design/icons";
import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import RootView from "site/root/component/RootView";
import RootPath from "site/root/router/RootPath";

const HomeView = ({t}) =>
	<RootView
		selected={[RootPath.root]}
	>
		<Card title={t("root.home.title")}>
			<Result
				icon={<SmileOutlined/>}
				status={"success"}
				title={t("root.home.content.title")}
				subTitle={t("root.home.content.subtitle")}
			/>
		</Card>
	</RootView>
;

export default withTranslation()(HomeView);
