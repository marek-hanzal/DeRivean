import React from "react";
import RootMenu from "site/root/component/RootMenu";
import EntityMenu from "site/root/entity/component/EntityMenu";
import PlayerMenu from "site/root/player/component/PlayerMenu";

const MainMenu = props =>
	<>
		<PlayerMenu {...props}/>
		<EntityMenu {...props}/>
		<RootMenu {...props}/>
	</>
;

export default MainMenu;
