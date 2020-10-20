import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import HomeView from "site/internal/kingdom/heroes/view/HomeView";

const KingdomHeroesRouter = () =>
	<Switch>
		<Route exact path={KingdomHeroesPath.home} component={HomeView}/>
	</Switch>
;

export default KingdomHeroesRouter;
