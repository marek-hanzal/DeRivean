import React from "react";
import {Route, Switch} from "react-router";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import HomeView from "site/internal/kingdom/view/HomeView";

const KingdomRouter = () =>
	<Switch>
		<Route exact path={KingdomPath.home} component={HomeView}/>
	</Switch>
;

export default KingdomRouter;
