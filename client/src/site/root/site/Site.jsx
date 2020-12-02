import {BaseLayout, BaseMenu, HomeIcon, link, match, MenuDivider, MenuItem, NotFoundView, route, SessionExpiredView, SignedInView, SignOutView} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import LogoutMenuItem from "../../common/menu/LogoutMenuItem";
import {AttributeGroupMenuItem} from "../module/attribute-group/site/Menu";
import {TranslationMenuItem} from "../module/translation/site/Menu";
import {UserMenuItem} from "../module/user/site/Menu";
import HomeView from "../view/home/HomeView";
import Footer from "./Footer";
import Header from "./Header";

route("root", "/", "/");
route("root.sign-in", "sign-in/*", "/sign-in");
route("root.sign-out", "sign-out/*", "/sign-out");
route("root.session-expired", "session-expired/*", "/session-expired");

export const RootSite = () => {
	return (
		<BaseLayout
			header={<Header/>}
			menu={
				<Routes>
					{/*UserMenuRoute(),*/}
					{/*KingdomMenuRoute(),*/}
					{/*BuildingMenuRoute(),*/}
					{/*HeroMenuRoute(),*/}
					{/*TranslationMenuRoute(),*/}
					{/*AttributeGroupMenuRoute(),*/}
					{/*AttributeTypeMenuRoute(),*/}
					<Route path={"*"} element={
						<BaseMenu>
							<MenuDivider/>
							<MenuItem key={"root.home"} id={"root.home"} href={link("root")} icon={<HomeIcon/>}/>
							<MenuDivider/>

							<UserMenuItem key={"root.user"}/>
							<MenuDivider/>
							<AttributeGroupMenuItem key={"root.attribute-group"}/>
							<MenuDivider/>
							<TranslationMenuItem key={"root.translation"}/>

							<MenuDivider/>
							<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
						</BaseMenu>
					}/>
				</Routes>
			}
			router={
				<Routes>
					{/*UserRoute(),*/}
					{/*KingdomRoute(),*/}
					{/*BuildingRoute(),*/}
					{/*HeroRoute(),*/}
					{/*BlogRoute(),*/}
					{/*TranslationRoute(),*/}
					{/*AttributeGroupRoute(),*/}
					{/*AttributeTypeRoute(),*/}
					<Route path={match("root.sign-int")} element={<SignedInView link={link("root")}/>}/>
					<Route path={match("root.sign-out")} element={<SignOutView id={"root"}/>}/>
					<Route path={match("root.session-expired")} element={<SessionExpiredView link={link("root")}/>}/>
					<Route path={"/"} element={<HomeView/>}/>
					<Route path={"*"} element={<NotFoundView/>}/>
				</Routes>
			}
			footer={<Footer/>}
		/>
	);
};
