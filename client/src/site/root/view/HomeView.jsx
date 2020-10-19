import {SmileOutlined} from "@ant-design/icons";
import {Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import MainMenu from "site/root/component/MainMenu";
import RootView from "site/root/component/RootView";
import RootPath from "site/root/router/RootPath";

const HomeView = ({t}) =>
	<RootView
		title='root.home.title'
		menu={<MainMenu
			selected={[RootPath.root]}
		/>}
	>
		<Result
			icon={<SmileOutlined/>}
			status={"success"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
		/>
	</RootView>
;

export default withTranslation()(HomeView);
