import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseLayout from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import {BlogBreadcrumbRoute} from "site/root/module/blog/site/Breadcrumbs";
import {BlogMenuItem} from "site/root/module/blog/site/Menu";
import {BlogRoute} from "site/root/module/blog/site/Router";
import {BuildingBreadcrumbRoute} from "site/root/module/building/site/Breadcrumb";
import {BuildingMenuRoute} from "site/root/module/building/site/Menu";
import {BuildingRoute} from "site/root/module/building/site/Router";
import {HeroBreadcrumbRoute} from "site/root/module/hero/site/Breadcrumb";
import {HeroMenuRoute} from "site/root/module/hero/site/Menu";
import {HeroRoute} from "site/root/module/hero/site/Router";
import {KingdomBreadcrumbRoute} from "site/root/module/kingdom/site/Breadcrumbs";
import {KingdomMenuRoute} from "site/root/module/kingdom/site/Menu";
import {KingdomRoute} from "site/root/module/kingdom/site/Router";
import {TranslationMenuItem, TranslationMenuRoute} from "site/root/module/translation/site/Menu";
import {TranslationRoute} from "site/root/module/translation/site/Router";
import {UserBreadcrumbRoute} from "site/root/module/user/site/Breadcrumbs";
import {UserMenuItem, UserMenuRoute} from "site/root/module/user/site/Menu";
import {UserRoute} from "site/root/module/user/site/Router";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import menuLogout from "site/root/utils/menu/menuLogout";
import HomeView from "site/root/view/home/HomeView";
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
						KingdomMenuRoute(),
						BuildingMenuRoute(),
						HeroMenuRoute(),
						TranslationMenuRoute(),
						route("*", <BaseMenu
							items={[
								menuDivider(),
								menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
								menuDivider(),

								UserMenuItem(true),
								menuDivider(),
								BlogMenuItem(true),
								menuDivider(),
								TranslationMenuItem(true),

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
						KingdomBreadcrumbRoute(),
						BuildingBreadcrumbRoute(),
						HeroBreadcrumbRoute(),
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
						BuildingRoute(),
						HeroRoute(),
						BlogRoute(),
						TranslationRoute(),

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
