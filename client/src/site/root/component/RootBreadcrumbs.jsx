import HomeIcon from "component/icon/HomeIcon";
import React from "react";
import RootPath from "site/root/router/RootPath";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const RootBreadcrumbs = () => ([
	breadcrumbs(RootPath.root, [
		breadcrumbSimpleItem(RootPath.root, <HomeIcon/>),
	]),
]);

export default RootBreadcrumbs;
