import {BaseLayout, BaseMenu, HomeIcon, link, match, MenuDivider, MenuItem, NotFoundView, route, SessionExpiredView, SignedInView, SignOutView} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import LogoutMenuItem from "../../common/menu/LogoutMenuItem";
import {KingdomMenuItem} from "../module/kingdom/site/Menu";
import HomeView from "../view/home/HomeView";
import Footer from "./Footer";
import Header from "./Header";

route("game", "/", "/");
route("game.sign-in", "sign-in/*", "/sign-in");
route("game.sign-out", "sign-out/*", "/sign-out");
route("game.session-expired", "session-expired/*", "/session-expired");

export const GameSite = () => {
	return (
		<BaseLayout
			header={<Header/>}
			menu={
				<Routes>
					{/*KingdomMenuRoute(),*/}
					{/*BuildingMenuRoute(),*/}
					<Route path={"*"} element={
						<BaseMenu>
							<MenuDivider/>
							<MenuItem key={"game.home"} id={"game.home"} href={link("game")} icon={<HomeIcon/>}/>
							<MenuDivider/>
							<KingdomMenuItem/>
							<MenuDivider/>
							<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
						</BaseMenu>
					}/>
				</Routes>
			}
			router={
				<Routes>
					{/*KingdomRoute(),*/}
					{/*BuildingRoute(),*/}
					<Route path={match("game.sign-in")} element={<SignedInView link={link("game")}/>}/>
					<Route path={match("game.sign-out")} element={<SignOutView id={"game"}/>}/>
					<Route path={match("game.session-expired")} element={<SessionExpiredView link={link("game")}/>}/>
					<Route path={"/"} element={<HomeView/>}/>
					<Route path={"*"} element={<NotFoundView/>}/>
				</Routes>
			}
			footer={<Footer/>}
		/>
	);
};
