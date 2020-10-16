import React from 'react';
import EntityPath from "../router/EntityPath";
import RootView from "../../component/RootView";

const HomeView = () =>
	<RootView
		title='root.entity.home.title'
		open={[EntityPath.root]}
		selected={[EntityPath.home]}
	>
	</RootView>
;

export default HomeView;
