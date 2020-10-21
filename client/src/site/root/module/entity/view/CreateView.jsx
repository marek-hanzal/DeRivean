import {Card} from "antd";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";
import EntityPath from "site/root/module/entity/router/EntityPath";

const CreateView = ({t, view}) => createElement(
	view,
	{
		open: [EntityPath.root],
		selected: [EntityPath.create],
	},
	<Card title={t("root.entity.create.title")}>
	</Card>
);

export default withTranslation()(CreateView);
