import React from "react";
import EntityBreadcrumbs from "site/root/entity/component/EntityBreadcrumbs";
import PlayerBreadcrumbs from "site/root/player/component/PlayerBreadcrumbs";

const RootBreadcrumbs = () =>
	<>
		<PlayerBreadcrumbs/>
		<EntityBreadcrumbs/>
	</>
;

export default RootBreadcrumbs;
