import HomeIcon from "component/icon/HomeIcon";
import {BaseLayout} from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import {BuildingMenuRoute} from "site/game/module/building/site/Menu";
import {BuildingRoute} from "site/game/module/building/site/Router";
import {KingdomMenuItem, KingdomMenuRoute} from "site/game/module/kingdom/site/Menu";
import {KingdomRoute} from "site/game/module/kingdom/site/Router";
import Footer from "site/game/site/Footer";
import Header from "site/game/site/Header";
import HomeView from "site/game/view/home/HomeView";
import SessionExpiredView from "site/game/view/SessionExpiredView";
import SingInView from "site/game/view/SingInView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const link = Routes.game;

const Site = () => {
	return (
		<BaseLayout
			header={<Header/>}
			menu={
				<BaseRoutes
					routes={[
						KingdomMenuRoute(),
						BuildingMenuRoute(),
						route("*", <BaseMenu>
							<MenuDivider/>
							<MenuItem key={"game.home"} id={"game.home"} href={Routes.game} icon={<HomeIcon/>}/>
							<MenuDivider/>
							<KingdomMenuItem/>
							<MenuDivider/>
							<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link}/>
						</BaseMenu>)
					]}
				/>
			}
			router={
				<BaseRoutes
					routes={[
						KingdomRoute(),
						BuildingRoute(),
						route(link.signIn.link(), <SingInView/>),
						route(link.signOut.link(), <SingOutView id={"game"}/>),
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
