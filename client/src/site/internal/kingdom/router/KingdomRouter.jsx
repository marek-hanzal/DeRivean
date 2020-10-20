import React from "react";
import {Route, Switch} from "react-router";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomHeroesRouter from "site/internal/kingdom/heroes/router/KingdomHeroesRouter";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import HomeView from "site/internal/kingdom/view/HomeView";

const KingdomRouter = () =>
	<Switch>
		<Route exact path={KingdomPath.home} component={HomeView}/>
		<Route path={KingdomHeroesPath.root} component={KingdomHeroesRouter}/>
	</Switch>
;

export default KingdomRouter;
