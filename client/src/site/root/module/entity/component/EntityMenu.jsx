import React from "react";
import EntityHomeIcon from "site/root/module/entity/component/icon/EntityHomeIcon";
import EntityPath from "site/root/module/entity/router/EntityPath";
import commonMenu from "utils/menu/commonMenu";

const EntityMenu = () => commonMenu(
	EntityPath.root,
	<EntityHomeIcon/>,
	"root.entity"
);

export default EntityMenu;
