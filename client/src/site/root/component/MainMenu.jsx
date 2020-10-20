import React from "react";
import {Route, Switch} from "react-router";
import RootMenu from "site/root/component/RootMenu";
import EntityMenu from "site/root/entity/component/EntityMenu";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerMenu from "site/root/player/component/PlayerMenu";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const MainMenu = props =>
	<Switch>
		<Route path={PlayerPath.root} render={() => <PlayerMenu {...props}/>}/>
		<Route path={EntityPath.root} render={() => <EntityMenu {...props}/>}/>
		<Route path={RootPath.root} render={() => <RootMenu {...props}/>}/>
	</Switch>
;

export default MainMenu;
