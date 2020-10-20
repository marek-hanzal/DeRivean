import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import HomeView from "site/internal/kingdom/heroes/view/HomeView";
import ListView from "site/internal/kingdom/heroes/view/ListView";

const KingdomHeroesRouter = () =>
	<Switch>
		<Route path={KingdomHeroesPath.home} component={HomeView}/>
		<Route path={KingdomHeroesPath.list} component={ListView}/>
	</Switch>
;

export default KingdomHeroesRouter;
