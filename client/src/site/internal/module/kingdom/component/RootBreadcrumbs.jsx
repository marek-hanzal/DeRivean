import {CrownOutlined, HomeOutlined} from "@ant-design/icons";
import React from "react";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const RootBreadcrumbs = () => ([
	breadcrumbs(KingdomPath.root, [
		breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
		breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
	]),
]);

export default RootBreadcrumbs;
