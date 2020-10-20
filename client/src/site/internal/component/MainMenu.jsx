import React from "react";
import {Route, Switch} from "react-router";
import InternalMenu from "site/internal/component/InternalMenu";
import KingdomMenu from "site/internal/kingdom/component/KingdomMenu";
import KingdomHeroesMenu from "site/internal/kingdom/heroes/component/KingdomHeroesMenu";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const MainMenu = props =>
	<Switch>
		<Route path={KingdomHeroesPath.root} render={() => <KingdomHeroesMenu {...props}/>}/>
		<Route path={KingdomPath.root} render={() => <KingdomMenu {...props}/>}/>
		<Route path={InternalPath.root} render={() => <InternalMenu {...props}/>}/>
	</Switch>
;

export default MainMenu;
