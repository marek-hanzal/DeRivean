import React from "react";
import EntityHomeIcon from "site/root/module/entity/component/icon/EntityHomeIcon";
import EntityPath from "site/root/module/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const EntityBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	EntityPath.root,
	<EntityHomeIcon/>,
	"root.entity"
);

export default EntityBreadcrumbs;
