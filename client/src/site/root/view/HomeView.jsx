import React from "react";
import MainMenu from "site/root/component/MainMenu";
import RootView from "site/root/component/RootView";
import RootPath from "site/root/router/RootPath";

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
