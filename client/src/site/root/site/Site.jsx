import HomeIcon from "component/icon/HomeIcon";
import {BaseLayout} from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import {AttributeMenuItem, AttributeMenuRoute} from "site/root/module/attribute/site/Menu";
import {AttributeRoute} from "site/root/module/attribute/site/Router";
import {BlogRoute} from "site/root/module/blog/site/Router";
import {BuildingMenuRoute} from "site/root/module/building/site/Menu";
import {BuildingRoute} from "site/root/module/building/site/Router";
import {HeroMenuRoute} from "site/root/module/hero/site/Menu";
import {HeroRoute} from "site/root/module/hero/site/Router";
import {KingdomMenuRoute} from "site/root/module/kingdom/site/Menu";
import {KingdomRoute} from "site/root/module/kingdom/site/Router";
import {TranslationMenuItem, TranslationMenuRoute} from "site/root/module/translation/site/Menu";
import {TranslationRoute} from "site/root/module/translation/site/Router";
import {UserMenuItem, UserMenuRoute} from "site/root/module/user/site/Menu";
import {UserRoute} from "site/root/module/user/site/Router";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import HomeView from "site/root/view/home/HomeView";
import SessionExpiredView from "site/root/view/SessionExpiredView";
import SingInView from "site/root/view/SingInView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const link = Routes.root;

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
						AttributeMenuRoute(),
						route("*", <BaseMenu>
							<MenuDivider/>
							<MenuItem key={"root.home"} id={"root.home"} href={Routes.root} icon={<HomeIcon/>}/>
							<MenuDivider/>

							<UserMenuItem key={"root.user"}/>
							<MenuDivider/>
							<AttributeMenuItem key={"root.attribute"}/>
							<MenuDivider/>
							{/*<BlogMenuItem key={"root.blog"}/>*/}
							{/*<MenuDivider/>*/}
							<TranslationMenuItem key={"root.translation"}/>

							<MenuDivider/>
							<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
						</BaseMenu>)
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
						AttributeRoute(),

						route(link.signIn.link(), <SingInView/>),
						route(link.signOut.link(), <SingOutView id={"root"}/>),
						route(link.sessionExpired.link(), <SessionExpiredView/>),
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
