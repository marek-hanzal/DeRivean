import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/module/entity/router/EntityPath";

const HomeView = ({t}) =>
	<RootView
		open={[EntityPath.root]}
		selected={[EntityPath.home]}
	>
		<Card title={t("root.entity.home.title")}>
		</Card>
	</RootView>
;

export default withTranslation()(HomeView);
