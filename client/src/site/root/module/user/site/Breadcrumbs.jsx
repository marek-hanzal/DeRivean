import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import {KingdomBreadcrumbRoute} from "site/root/module/kingdom/site/Breadcrumbs";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.user.dashboard.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbSimpleItem("root.user.dashboard", <UserIcon/>),
				]}
			/>),
			route(Routes.root.user.create.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserIcon/>),
					breadcrumbSimpleItem("root.user.create", <CreateIcon/>),
				]}
			/>),
			route(Routes.root.user.list.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserIcon/>),
					breadcrumbSimpleItem("root.user.list", <ListIcon/>),
				]}
			/>),
			route(Routes.root.user.user.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbSimpleItem("root.userContext.dashboard", <UserIcon/>),
				]}
			/>),
			KingdomBreadcrumbRoute(),
		]}
	/>
;

const UserBreadcrumbRoute = () => route(Routes.root.user.match(), <Breadcrumbs/>);

export {
	UserBreadcrumbRoute,
};
