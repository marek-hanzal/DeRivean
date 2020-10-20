import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import CreateView from "site/internal/kingdom/heroes/view/create/CreateView";
import HomeView from "site/internal/kingdom/heroes/view/HomeView";
import ListView from "site/internal/kingdom/heroes/view/list/ListView";

const KingdomHeroesRouter = () =>
	<Switch>
		<Route path={KingdomHeroesPath.home} component={HomeView}/>
		<Route path={KingdomHeroesPath.list} component={ListView}/>
		<Route path={KingdomHeroesPath.create} component={CreateView}/>
	</Switch>
;

export default KingdomHeroesRouter;
