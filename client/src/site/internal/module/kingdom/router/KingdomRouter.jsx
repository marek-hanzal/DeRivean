import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/module/kingdom/heroes/router/KingdomHeroesPath";
import KingdomHeroesRouter from "site/internal/module/kingdom/heroes/router/KingdomHeroesRouter";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import HomeView from "site/internal/module/kingdom/view/HomeView";

const KingdomRouter = () =>
	<Switch>
		<Route exact path={KingdomPath.home} component={HomeView}/>
		<Route path={KingdomHeroesPath.root} component={KingdomHeroesRouter}/>
	</Switch>
;

export default KingdomRouter;
