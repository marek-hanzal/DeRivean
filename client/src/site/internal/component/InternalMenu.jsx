import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const InternalMenu = () => ([
	menuItem(InternalPath.root, "internal.home", <HomeIcon/>),
	menuItem(KingdomPath.home, "internal.kingdom", <KingdomHomeIcon/>),
	menuDivider(),
	menuItem(InternalPath.signOut, "internal.sign-out", <SignOutIcon/>),
]);

export default InternalMenu;
