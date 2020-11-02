import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
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
				route(Routes.root.building.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdom.kingdom", <KingdomIcon/>),
						breadcrumbSimpleItem("root.building", <BuildingIcon/>),
						breadcrumbSimpleItem("root.building.dashboard", <DashboardIcon/>),
					]}
				/>),
				route(Routes.root.building.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdom.kingdom", <KingdomIcon/>),
						breadcrumbSimpleItem("root.building", <BuildingIcon/>),
						breadcrumbItem(Routes.root.building.dashboard.link(), "root.building.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.building.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.building.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.kingdom.link(), "root.kingdom.kingdom", <KingdomIcon/>),
						breadcrumbSimpleItem("root.building", <BuildingIcon/>),
						breadcrumbItem(Routes.root.building.dashboard.link(), "root.building.dashboard", <DashboardIcon/>),
						breadcrumbSimpleItem("root.building.list", <ListIcon/>),
					]}
				/>),
				route(Routes.root.building.building.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbSimpleItem("root.building.building", <BuildingIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const BuildingBreadcrumbRoute = () => route(Routes.root.building.match(), <Breadcrumb/>);

export {
	BuildingBreadcrumbRoute,
};
