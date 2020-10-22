import React from "react";
import EntityDashboardIcon from "site/root/module/entity/component/icon/EntityDashboardIcon";
import EntityPath from "site/root/module/entity/EntityPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const EntityBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	EntityPath.root,
	<EntityDashboardIcon/>,
	"root.entity"
);

export default EntityBreadcrumbs;
