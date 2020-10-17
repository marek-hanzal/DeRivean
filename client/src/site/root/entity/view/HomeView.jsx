import React from "react";
import RootView from "site/root/component/RootView";
import EntityPath from "site/root/entity/router/EntityPath";

const HomeView = () =>
	<RootView
		title='root.entity.home.title'
		open={[EntityPath.root]}
		selected={[EntityPath.home]}
	>
	</RootView>
;

export default HomeView;
