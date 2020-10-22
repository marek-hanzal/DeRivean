import HomeIcon from "component/icon/HomeIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const RootBreadcrumbs = () => ([
	breadcrumbs(KingdomPath.root, [
		breadcrumbSimpleItem(InternalPath.root, <HomeIcon/>),
		breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <KingdomHomeIcon/>),
	]),
]);

export default RootBreadcrumbs;
