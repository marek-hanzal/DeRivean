import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const HomeView = ({t, root, view}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/home`],
	},
	<Card title={t("root.entity.home.title")}>
	</Card>
);

export default withTranslation()(HomeView);
