import React from 'react';
import PlayerPath from "../router/PlayerPath";
import RootView from "../../component/RootView";

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
