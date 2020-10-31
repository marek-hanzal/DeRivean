import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumbs = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdom.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserIcon/>),
						breadcrumbSimpleItem("root.kingdom.dashboard", <KingdomIcon/>),
					]}
				/>),
				route(Routes.root.kingdom.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.dashboard.link(), "root.kingdom.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdom.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.kingdom.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserIcon/>),
						breadcrumbItem(Routes.root.kingdom.dashboard.link(), "root.kingdom.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.kingdom.list", <ListIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const KingdomBreadcrumbRoute = () => route(Routes.root.kingdom.match(), <Breadcrumbs/>);

export {
	KingdomBreadcrumbRoute,
};