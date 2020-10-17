import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import InternalPath from "site/internal/router/InternalPath";

const HomeView = ({t}) =>
	<InternalView
		title='internal.home.title'
		open={[InternalPath.root]}
		selected={[InternalPath.root]}
	>
	</InternalView>
;

export default withTranslation()(HomeView);
