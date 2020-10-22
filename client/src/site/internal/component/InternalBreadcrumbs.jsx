import HomeIcon from "component/icon/HomeIcon";
import React from "react";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const InternalBreadcrumbs = () => ([
	breadcrumbs(InternalPath.root, [
		breadcrumbSimpleItem(InternalPath.root, <HomeIcon/>),
	]),
]);

export default InternalBreadcrumbs;
