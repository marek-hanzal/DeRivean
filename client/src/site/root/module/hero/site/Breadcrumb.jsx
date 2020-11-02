import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
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
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.hero", <HeroIcon/>),
						breadcrumbSimpleItem("root.hero.dashboard", <DashboardIcon/>),
					]}
				/>),
				route(Routes.root.hero.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.hero", <HeroIcon/>),
						breadcrumbItem(Routes.root.hero.dashboard.link(), "root.hero.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.hero.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.hero.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.hero", <HeroIcon/>),
						breadcrumbItem(Routes.root.hero.dashboard.link(), "root.hero.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.hero.list", <ListIcon/>),
					]}
				/>),
				route(Routes.root.hero.hero.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbSimpleItem("root.hero.hero", <HeroIcon/>),
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
