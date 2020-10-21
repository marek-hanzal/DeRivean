import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/module/entity/router/EntityPath";

const CreateView = ({t}) =>
	<RootView
		open={[EntityPath.root]}
		selected={[EntityPath.create]}
	>
		<Card title={t("root.entity.create.title")}>
		</Card>
	</RootView>
;

export default withTranslation()(CreateView);
