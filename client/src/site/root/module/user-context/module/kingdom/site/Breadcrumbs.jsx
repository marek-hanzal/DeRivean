import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserContextIcon from "site/root/module/user-context/component/icon/UserContextIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumbs = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.userContext.kingdom.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserContextIcon/>),
						breadcrumbSimpleItem("root.userContext.kingdom.dashboard", <KingdomIcon/>),
					]}
				/>),
				route(Routes.root.userContext.kingdom.create.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserContextIcon/>),
						breadcrumbItem(Routes.root.userContext.kingdom.dashboard.link(), "root.userContext.kingdom.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.userContext.kingdom.create", <CreateIcon/>),
					]}
				/>),
				route(Routes.root.userContext.kingdom.list.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserContextIcon/>),
						breadcrumbItem(Routes.root.userContext.kingdom.dashboard.link(), "root.userContext.kingdom.dashboard", <KingdomIcon/>),
						breadcrumbSimpleItem("root.userContext.kingdom.list", <ListIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const KingdomBreadcrumbRoute = () => route(Routes.root.userContext.kingdom.match(), <Breadcrumbs/>);

export {
	KingdomBreadcrumbRoute,
};
