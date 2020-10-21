import {FormOutlined, HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const commonBreadcrumbs = (
	home,
	root,
	icon,
	translation,
) => ([
	breadcrumbs(`${root}/list`, [
		breadcrumbSimpleItem(home, <HomeOutlined/>),
		breadcrumbItem(`${root}/home`, `${translation}.home`, icon),
		breadcrumbItem(`${root}/list`, `${translation}.list`, <UnorderedListOutlined/>),
	]),
	breadcrumbs(`${root}/create`, [
		breadcrumbSimpleItem(home, <HomeOutlined/>),
		breadcrumbItem(`${root}/home`, `${translation}.home`, icon),
		breadcrumbItem(`${root}/create`, `${translation}.create`, <FormOutlined/>),
	]),
	breadcrumbs(root, [
		breadcrumbSimpleItem(home, <HomeOutlined/>),
		breadcrumbItem(`${root}/home`, `${translation}.home`, icon),
	]),
]);

export default commonBreadcrumbs;
