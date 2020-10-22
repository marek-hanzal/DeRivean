import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import HeroesHomeIcon from "site/internal/module/kingdom/module/heroes/component/icon/HeroesHomeIcon";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(KingdomPath.root, [
		menuItem(InternalPath.root, "internal.home", <HomeIcon/>),
		menuItem(KingdomPath.home, "internal.kingdom", <KingdomHomeIcon/>),
		menuItem(KingdomHeroesPath.home, "internal.kingdom.heroes", <HeroesHomeIcon/>),
		menuDivider(),
		menuItem(InternalPath.signOut, "internal.sign-out", <SignOutIcon/>),
	]),
]);

export default RootMenu;
