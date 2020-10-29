import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import {BuildingBreadcrumbRoute} from "site/root/module/kingdom-context/module/building/site/Breadcrumb";
import {HeroBreadcrumbRoute} from "site/root/module/kingdom-context/module/hero/site/Breadcrumb";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumbs = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdomContext.dashboard.match(), <BaseBreadcrumbs
					items={[
						breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
						breadcrumbSimpleItem("root.kingdomContext.dashboard", <KingdomContextIcon/>),
					]}
				/>),
				BuildingBreadcrumbRoute(),
				HeroBreadcrumbRoute(),
			]}
		/>
	);
};

const KingdomContextBreadcrumbRoute = () => route(Routes.root.kingdomContext.match(), <Breadcrumbs/>);

export {
	KingdomContextBreadcrumbRoute,
};
