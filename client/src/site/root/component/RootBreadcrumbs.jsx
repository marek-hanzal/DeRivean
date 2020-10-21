import {HomeOutlined} from "@ant-design/icons";
import React from "react";
import RootPath from "site/root/router/RootPath";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const RootBreadcrumbs = () => ([
	breadcrumbs(RootPath.root, [
		breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
	]),
]);

export default RootBreadcrumbs;
