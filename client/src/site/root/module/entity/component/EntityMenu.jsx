import React from "react";
import EntityDashboardIcon from "site/root/module/entity/component/icon/EntityDashboardIcon";
import EntityPath from "site/root/module/entity/EntityPath";
import commonMenu from "utils/menu/commonMenu";

const EntityMenu = () => commonMenu(
	EntityPath.root,
	<EntityDashboardIcon/>,
	"root.entity"
);

export default EntityMenu;
