import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseLayout from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import {BlogBreadcrumbRoute} from "site/root/module/blog/site/Breadcrumbs";
import {BlogMenuItem, BlogMenuRoute} from "site/root/module/blog/site/Menu";
import {BlogRoute} from "site/root/module/blog/site/Router";
import {UserBreadcrumbRoute} from "site/root/module/user/site/Breadcrumbs";
import {UserMenuItem, UserMenuRoute} from "site/root/module/user/site/Menu";
import {UserRoute} from "site/root/module/user/site/Router";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import RootPath from "site/root/site/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Site = () =>
	<BaseLayout
		header={<Header/>}
		menu={
			<BaseRoutes
				routes={[
					UserMenuRoute(),
					BlogMenuRoute(),
					route("/", <BaseMenu
						items={[
							menuItem(RootPath.root, "root.home", <HomeIcon/>),
							menuDivider(),

							UserMenuItem(),
							BlogMenuItem(),

							menuDivider(),
							menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
						]}
					/>)
				]}
			/>
		}
		breadcrumbs={
			<BaseRoutes
				routes={[
					UserBreadcrumbRoute(),
					BlogBreadcrumbRoute(),

					route("/", <BaseBreadcrumbs
						items={[
							breadcrumbIconItem(RootPath.root, <HomeIcon/>),
						]}
					/>),
				]}
			/>
		}
		router={
			<BaseRoutes
				routes={[
					UserRoute(),
					BlogRoute(),

					route(RootPath.signIn, <SingInView/>),
					route(RootPath.signOut, <SingOutView id={"root"}/>),
					route("/", <HomeView/>),
					route("*", <NotFoundView/>),
				]}
			/>
		}
		footer={<Footer/>}
	/>
;

export default Site;
