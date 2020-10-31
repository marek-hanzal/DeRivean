import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
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
import {KingdomContextBreadcrumbRoute} from "site/root/module/kingdom-context/site/Breadcrumbs";
import {KingdomContextMenuRoute} from "site/root/module/kingdom-context/site/Menu";
import {KingdomContextRoute} from "site/root/module/kingdom-context/site/Router";
import {UserContextBreadcrumbRoute} from "site/root/module/user-context/site/Breadcrumbs";
import {UserContextMenuRoute} from "site/root/module/user-context/site/Menu";
import {UserContextRoute} from "site/root/module/user-context/site/Router";
import {UserBreadcrumbRoute} from "site/root/module/user/site/Breadcrumbs";
import {UserMenuItem} from "site/root/module/user/site/Menu";
import {UserRoute} from "site/root/module/user/site/Router";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
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
						UserContextMenuRoute(),
						KingdomContextMenuRoute(),
						BuildingContextMenuRoute(),

						route("*", <BaseMenu
							items={[
								menuDivider(),
								menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
								menuDivider(),

								UserMenuItem(),
								menuDivider(),
								BlogMenuItem(),

								menuDivider(),
								menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
							]}
						/>)
					]}
				/>
			}
			breadcrumbs={
				<BaseRoutes
					routes={[
						UserBreadcrumbRoute(),
						UserContextBreadcrumbRoute(),
						KingdomContextBreadcrumbRoute(),
						BuildingContextBreadcrumbRoute(),
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
						UserContextRoute(),
						KingdomContextRoute(),
						BuildingContextRoute(),
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
