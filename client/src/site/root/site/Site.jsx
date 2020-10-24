import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseLayout from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import PublicPath from "site/public/site/PublicPath";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogBreadcrumbs from "site/root/module/blog/site/BlogBreadcrumbs";
import BlogMenu from "site/root/module/blog/site/BlogMenu";
import BlogPath from "site/root/module/blog/site/BlogPath";
import BlogRouter from "site/root/module/blog/site/BlogRouter";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserBreadcrumbs from "site/root/module/user/site/UserBreadcrumbs";
import UserMenu from "site/root/module/user/site/UserMenu";
import UserPath from "site/root/module/user/site/UserPath";
import UserRouter from "site/root/module/user/site/UserRouter";
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
					route(UserPath.route.root, <UserMenu/>),
					route(BlogPath.root + "/*", <BlogMenu/>),
					route("/", <BaseMenu
						items={[
							menuItem(RootPath.root, "root.home", <HomeIcon/>),
							menuDivider(),
							menuItem(UserPath.link.dashboard(), "root.user.dashboard", <UserDashboardIcon/>),
							menuItem(BlogPath.link.dashboard(), "root.blog.dashboard", <BlogIcon/>),
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
					route(UserPath.route.root, <UserBreadcrumbs/>),
					route(BlogPath.root + "/*", <BlogBreadcrumbs/>),
					route("/", <BaseBreadcrumbs
						items={[
							breadcrumbIconItem(PublicPath.root, <HomeIcon/>),
						]}
					/>),
				]}
			/>
		}
		router={
			<BaseRoutes
				routes={[
					route(RootPath.signIn, <SingInView/>),
					route(RootPath.signOut, <SingOutView id={"root"}/>),
					route(UserPath.route.root, <UserRouter/>),
					route(BlogPath.root + "/*", <BlogRouter/>),
					route("/", <HomeView/>),
					route("*", <NotFoundView/>),
				]}
			/>
		}
		footer={<Footer/>}
	/>
;

export default Site;
