import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const HomeView = (
	{
		t,
		root,
		translation,
		view
	}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/home`],
	},
	<Card title={t(`${translation}.home.title`)}>
	</Card>
);

export default withTranslation()(HomeView);
