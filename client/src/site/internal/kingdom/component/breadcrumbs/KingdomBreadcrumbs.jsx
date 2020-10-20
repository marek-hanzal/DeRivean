import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import HomeBreadcrumbs from "site/internal/kingdom/component/breadcrumbs/HomeBreadcrumbs";
import KingdomHeroesBreadcrumbs from "site/internal/kingdom/heroes/component/breadcrumbs/KingdomHeroesBreadcrumbs";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";

const KingdomBreadcrumbs = () =>
	<Switch>
		<Route path={KingdomHeroesPath.root} component={KingdomHeroesBreadcrumbs}/>
		<Route path={KingdomPath.home} component={HomeBreadcrumbs}/>
	</Switch>
;

export default KingdomBreadcrumbs;
