import React from 'react';
import {Switch} from "react-router-dom";
import EntityBreadcrumbs from "../entity/component/EntityBreadcrumbs";
import PlayerBreadcrumbs from "../player/component/PlayerBreadcrumbs";

const RootBreadcrumbs = () =>
	<Switch>
		<PlayerBreadcrumbs/>
		<EntityBreadcrumbs/>
	</Switch>
;

export default RootBreadcrumbs;
