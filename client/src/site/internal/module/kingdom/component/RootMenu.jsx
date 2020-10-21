import {CrownOutlined, HomeOutlined, MehOutlined, PoweroffOutlined} from "@ant-design/icons";
import React from "react";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(KingdomPath.root, [
		menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
		menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
		menuItem(KingdomHeroesPath.home, "internal.kingdom.heroes", <MehOutlined/>),
		menuDivider(),
		menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
	]),
]);

export default RootMenu;
