import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import HeroesHomeIcon from "site/internal/module/kingdom/module/heroes/component/icon/HeroesHomeIcon";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const HeroesBreadcrumbs = () => ([
	breadcrumbs(KingdomHeroesPath.create, [
		breadcrumbSimpleItem(InternalPath.root, <HomeIcon/>),
		breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <KingdomHomeIcon/>),
		breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <HeroesHomeIcon/>),
		breadcrumbItem(KingdomHeroesPath.create, "internal.kingdom.heroes.create", <CreateIcon/>),
	]),
	breadcrumbs(KingdomHeroesPath.list, [
		breadcrumbSimpleItem(InternalPath.root, <HomeIcon/>),
		breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <KingdomHomeIcon/>),
		breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <HeroesHomeIcon/>),
		breadcrumbItem(KingdomHeroesPath.list, "internal.kingdom.heroes.list", <ListIcon/>),
	]),
	breadcrumbs(KingdomHeroesPath.root, [
		breadcrumbSimpleItem(InternalPath.root, <HomeIcon/>),
		breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <KingdomHomeIcon/>),
		breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <HeroesHomeIcon/>),
	]),
]);

export default HeroesBreadcrumbs;
