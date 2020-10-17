import React from "react";
import RootView from "site/root/component/RootView";
import PlayerPath from "site/root/player/router/PlayerPath";

const CreateView = () =>
	<RootView
		title='root.player.create.title'
		subtitle='root.player.create.subtitle'
		open={[PlayerPath.root]}
		selected={[PlayerPath.create]}
	>
	</RootView>
;

export default CreateView;
