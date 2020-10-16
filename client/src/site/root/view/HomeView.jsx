import React from 'react';
import MainMenu from '../component/MainMenu';
import RootPath from "../router/RootPath";
import RootView from "../component/RootView";

const HomeView = () =>
	<RootView
		title='root.home.title'
		menu={<MainMenu
			selected={[RootPath.root]}
		/>}
	>
	</RootView>
;

export default HomeView;
