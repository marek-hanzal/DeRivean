import { Card } from "antd";
import React, { createElement } from "react";
import { withTranslation } from "react-i18next";

const DashboardView = (
	{
		t,
		root,
		translation,
		view
	}) => createElement(
	view,
	{
		open:     [root],
		selected: [`${root}/dashboard`],
	},
	<Card title={t(`${translation}.dashboard.title`)}>
	</Card>
);

export default withTranslation()(DashboardView);
