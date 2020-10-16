import React from 'react';
import EntityMenu from "../entity/component/EntityMenu";
import RootMenu from "./RootMenu";
import PlayerMenu from "../player/component/PlayerMenu";

const MainMenu = (props) =>
	<>
		<PlayerMenu {...props}/>
		<EntityMenu {...props}/>
		<RootMenu {...props}/>
	</>
;

export default MainMenu;
