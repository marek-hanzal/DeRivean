import {HomeOutlined} from "@ant-design/icons";
import React from "react";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const InternalBreadcrumbs = () => ([
	breadcrumbs(InternalPath.root, [
		breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
	]),
]);

export default InternalBreadcrumbs;
