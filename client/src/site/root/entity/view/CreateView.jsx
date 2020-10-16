import React from 'react';
import {withTranslation} from 'react-i18next';
import EntityPath from "../router/EntityPath";
import RootView from "../../component/RootView";

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
