import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeBreadcrumbs from "site/internal/kingdom/heroes/component/breadcrumbs/HomeBreadcrumbs";
import ListBreadcrumbs from "site/internal/kingdom/heroes/component/breadcrumbs/ListBreadcrumbs";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";

const KingdomHeroesBreadcrumbs = () =>
	<Switch>
		<Route path={KingdomHeroesPath.home} component={HomeBreadcrumbs}/>
		<Route path={KingdomHeroesPath.list} component={ListBreadcrumbs}/>
	</Switch>
;

export default KingdomHeroesBreadcrumbs;
