import React from 'react';
import PlayerPath from "../router/PlayerPath";
import RootView from "../../component/RootView";

const HomeView = () =>
	<RootView
		title='root.player.home.title'
		open={[PlayerPath.root]}
		selected={[PlayerPath.home]}
	>
	</RootView>
;

export default HomeView;
