import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";
import EntityPath from "site/root/module/entity/router/EntityPath";

const HomeView = ({t, view}) => createElement(
	view,
	{
		open: [EntityPath.root],
		selected: [EntityPath.home]
	},
	<Card title={t("root.entity.home.title")}>
	</Card>
);

export default withTranslation()(HomeView);
