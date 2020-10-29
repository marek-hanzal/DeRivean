import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/root/module/kingdom-context/module/building/component/icon/BuildingIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumb = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdomContext.building.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building", <BuildingIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building.dashboard", <DashboardIcon/>),
					]}
				/>),
				route(Routes.root.kingdomContext.building.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building", <BuildingIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.building.dashboard.link(), "root.kingdomContext.building.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.kingdomContext.building.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building", <BuildingIcon/>),
						breadcrumbItem(Routes.root.kingdomContext.building.dashboard.link(), "root.kingdomContext.building.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.building.list", <ListIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const BuildingBreadcrumbRoute = () => route(Routes.root.kingdomContext.building.match(), <Breadcrumb/>);

export {
	BuildingBreadcrumbRoute,
};
