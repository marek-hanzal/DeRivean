import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const CreateView = ({t, root, view}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/create`],
	},
	<Card title={t("root.entity.create.title")}>
	</Card>
);

export default withTranslation()(CreateView);
