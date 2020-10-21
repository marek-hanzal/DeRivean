import {RobotOutlined} from "@ant-design/icons";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import commonMenu from "utils/menu/commonMenu";

const EntityMenu = () => commonMenu(
	EntityPath.root,
	<RobotOutlined/>,
	"root.entity"
);

export default EntityMenu;
