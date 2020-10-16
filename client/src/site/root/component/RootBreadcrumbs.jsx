import React from 'react';
import EntityBreadcrumbs from "../entity/component/EntityBreadcrumbs";
import PlayerBreadcrumbs from "../player/component/PlayerBreadcrumbs";

const RootBreadcrumbs = () =>
	<>
		<PlayerBreadcrumbs/>
		<EntityBreadcrumbs/>
	</>
;

export default RootBreadcrumbs;
