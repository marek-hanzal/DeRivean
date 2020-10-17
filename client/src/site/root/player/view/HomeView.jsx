import React from "react";
import RootView from "site/root/component/RootView";
import PlayerPath from "site/root/player/router/PlayerPath";

const HomeView = () =>
	<RootView
		title='root.player.home.title'
		open={[PlayerPath.root]}
		selected={[PlayerPath.home]}
	>
	</RootView>
;

export default HomeView;
