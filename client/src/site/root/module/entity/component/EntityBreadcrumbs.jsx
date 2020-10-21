import {HomeOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const EntityBreadcrumbs = () => ([
	breadcrumbs(EntityPath.list, [
		breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
		breadcrumbItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
		breadcrumbItem(EntityPath.list, "root.entity.list", <UnorderedListOutlined/>),
	]),
	breadcrumbs(EntityPath.root, [
		breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
		breadcrumbItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
	]),
]);

export default EntityBreadcrumbs;
