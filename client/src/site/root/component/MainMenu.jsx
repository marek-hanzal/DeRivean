import React from 'react';
import EntityMenu from "../entity/component/EntityMenu";
import RootMenu from "./RootMenu";
import PlayerMenu from "../player/component/PlayerMenu";

const MainMenu = () =>
	<>
		<PlayerMenu/>
		<EntityMenu/>
		<RootMenu/>
	</>
;

export default MainMenu;
