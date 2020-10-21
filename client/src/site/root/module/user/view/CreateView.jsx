import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const CreateView = (
	{
		t,
		root,
		translation,
		view,
	}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/create`],
	},
	<Card title={t(`${translation}.create.title`)}>
	</Card>
);

export default withTranslation()(CreateView);
