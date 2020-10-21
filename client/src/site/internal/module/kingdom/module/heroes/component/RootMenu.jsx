import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(KingdomHeroesPath.root, [
		menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
		menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
		menuDivider(),
		menuItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
		menuItem(KingdomHeroesPath.create, "internal.kingdom.heroes.create", <FormOutlined/>),
		menuItem(KingdomHeroesPath.list, "internal.kingdom.heroes.list", <UnorderedListOutlined/>),
		menuDivider(),
		menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
	]),
]);

export default RootMenu;
