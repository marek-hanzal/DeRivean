import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const KingdomBreadcrumbs = () => ([].concat(
	[
		breadcrumbs(KingdomHeroesPath.create, [
			breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
			breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
			breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
			breadcrumbItem(KingdomHeroesPath.create, "internal.kingdom.heroes.create", <FormOutlined/>),
		]),
		breadcrumbs(KingdomHeroesPath.list, [
			breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
			breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
			breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
			breadcrumbItem(KingdomHeroesPath.list, "internal.kingdom.heroes.list", <UnorderedListOutlined/>),
		]),
		breadcrumbs(KingdomHeroesPath.root, [
			breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
			breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
			breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
		]),
		breadcrumbs(KingdomPath.root, [
			breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
			breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
		]),
	],
));

export default KingdomBreadcrumbs;
