import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseLayout from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import {BlogBreadcrumbRoute} from "site/root/module/blog/site/Breadcrumbs";
import {BlogMenuItem} from "site/root/module/blog/site/Menu";
import {BlogRoute} from "site/root/module/blog/site/Router";
import {BuildingContextBreadcrumbRoute} from "site/root/module/building-context/site/Breadcrumbs";
import {BuildingContextMenuRoute} from "site/root/module/building-context/site/Menu";
import {BuildingContextRoute} from "site/root/module/building-context/site/Router";
import {HeroContextBreadcrumbRoute} from "site/root/module/hero-context/site/Breadcrumbs";
import {HeroContextMenuRoute} from "site/root/module/hero-context/site/Menu";
import {HeroContextRoute} from "site/root/module/hero-context/site/Router";
import {KingdomContextMenuRoute} from "site/root/module/kingdom-context/site/Menu";
import {KingdomRoute} from "site/root/module/kingdom/site/Router";
import {UserBreadcrumbRoute} from "site/root/module/user/site/Breadcrumbs";
import {UserMenuItem, UserMenuRoute} from "site/root/module/user/site/Menu";
import {UserRoute} from "site/root/module/user/site/Router";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import menuLogout from "site/root/utils/menu/menuLogout";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Site = () => {
	return (
		<BaseLayout
			header={<Header/>}
			menu={
				<BaseRoutes
					routes={[
						UserMenuRoute(),
						KingdomContextMenuRoute(),
						BuildingContextMenuRoute(),
						HeroContextMenuRoute(),
						route("*", <BaseMenu
							items={[
								menuDivider(),
								menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
								menuDivider(),

								UserMenuItem(),
								menuDivider(),
								BlogMenuItem(),

								menuDivider(),
								menuLogout(),
							]}
						/>)
					]}
				/>
			}
			breadcrumbs={
				<BaseRoutes
					routes={[
						UserBreadcrumbRoute(),
						BuildingContextBreadcrumbRoute(),
						HeroContextBreadcrumbRoute(),
						BlogBreadcrumbRoute(),

						route("/", <BaseBreadcrumbs
							items={[
								breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
							]}
						/>),
					]}
				/>
			}
			router={
				<BaseRoutes
					routes={[
						UserRoute(),
						KingdomRoute(),
						BuildingContextRoute(),
						HeroContextRoute(),
						BlogRoute(),

						route(Routes.root.signIn.link(), <SingInView/>),
						route(Routes.root.signOut.link(), <SingOutView id={"root"}/>),
						route("/", <HomeView/>),
						route("*", <NotFoundView/>),
					]}
				/>
			}
			footer={<Footer/>}
		/>
	);
};

export default Site;
