import React from "react";
import {withTranslation} from "react-i18next";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/entity/router/EntityPath";

const CreateView = ({t}) =>
	<RootView
		title='root.entity.create.title'
		subtitle='root.entity.create.subtitle'
		open={[EntityPath.root]}
		selected={[EntityPath.create]}
	>
	</RootView>
;

export default withTranslation()(CreateView);
