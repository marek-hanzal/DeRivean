import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
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
				route(Routes.root.hero.context.hero.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbItem(Routes.root.user.list.link(), "root.user.list", <UserIcon/>),
						breadcrumbSimpleItem("root.hero.context.hero", <HeroIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const HeroContextBreadcrumbRoute = () => route(Routes.root.hero.context.match(), <Breadcrumbs/>);

export {
	HeroContextBreadcrumbRoute,
};