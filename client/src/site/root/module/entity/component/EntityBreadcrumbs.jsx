import {RobotOutlined} from "@ant-design/icons";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const EntityBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	EntityPath.root,
	<RobotOutlined/>,
	"root.entity"
);

export default EntityBreadcrumbs;
