import {CrownOutlined, HomeOutlined, PoweroffOutlined} from "@ant-design/icons";
import React from "react";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const InternalMenu = () => ([
	menu(InternalPath.root, [
		menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
		menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
		menuDivider(),
		menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
	])
]);

export default InternalMenu;
