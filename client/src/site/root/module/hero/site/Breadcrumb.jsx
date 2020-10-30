import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserContextIcon from "site/root/module/user-context/component/icon/UserContextIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumb = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.hero.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserContextIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero", <HeroIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero.dashboard", <DashboardIcon/>),
					]}
				/>),
				route(Routes.root.hero.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserContextIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero", <HeroIcon/>),
						breadcrumbItem(Routes.root.hero.dashboard.link(), "root.kingdomContext.hero.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.hero.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserContextIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero", <HeroIcon/>),
						breadcrumbItem(Routes.root.hero.dashboard.link(), "root.kingdomContext.hero.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.hero.list", <ListIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const HeroBreadcrumbRoute = () => route(Routes.root.hero.match(), <Breadcrumb/>);

export {
	HeroBreadcrumbRoute,
};
