import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import BaseLayout from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import PublicPath from "site/public/site/PublicPath";
import HomeView from "site/public/view/HomeView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

/**
 * Site could be maybe abstracted too, but it's here to prevent moving internal site stuff
 * to root level of the application (thus we can have Menu instead of Menu used somewhere around App).
 */
const Site = () =>
	<BaseLayout
		header={<Header/>}
		menu={
			<BaseRoutes
				routes={[
					route("*", <BaseMenu
						items={[
							menuItem(PublicPath.root, "public.home", <HomeIcon/>),
							menuDivider(),
							menuItem(PublicPath.signUp, "public.sign-up", <SignUpIcon/>),
							menuItem(PublicPath.signIn, "public.sign-in", <SignInIcon/>),
						]}
					/>),
				]}
			/>
		}
		breadcrumbs={
			<BaseRoutes
				routes={[
					route(PublicPath.signUp, <BaseBreadcrumbs
						items={[
							breadcrumbIconItem(PublicPath.root, <HomeIcon/>),
							breadcrumbCurrentItem("public.sign-up", <SignUpIcon/>),
						]}
					/>),
					route(PublicPath.signIn, <BaseBreadcrumbs
						items={[
							breadcrumbIconItem(PublicPath.root, <HomeIcon/>),
							breadcrumbCurrentItem("public.sign-in", <SignInIcon/>),
						]}
					/>),
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
					route(PublicPath.signUp, <SignUpView/>),
					route(PublicPath.signIn, <SingInView/>),
					route(PublicPath.signOut, <SingOutView/>),
					route("/", <HomeView/>),
					route("*", <NotFoundView/>),
				]}
			/>
		}
		footer={<Footer/>}
	/>
;

export default Site;
