import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import CreateView from "site/internal/module/kingdom/module/heroes/view/create/CreateView";
import HomeView from "site/internal/module/kingdom/module/heroes/view/HomeView";
import ListView from "site/internal/module/kingdom/module/heroes/view/list/ListView";

const KingdomHeroesRouter = () =>
	<Switch>
		<Route path={KingdomHeroesPath.home} component={HomeView}/>
		<Route path={KingdomHeroesPath.list} component={ListView}/>
		<Route path={KingdomHeroesPath.create} component={CreateView}/>
	</Switch>
;

export default KingdomHeroesRouter;
