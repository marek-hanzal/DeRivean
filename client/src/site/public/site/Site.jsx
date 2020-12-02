import {BaseMenu, HomeIcon, link, match, MenuDivider, MenuItem, NotFoundView, route, SessionExpiredView, SiderLayout, SignedOutView, SignInIcon, SignUpIcon} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import HomeView from "../view/HomeView";
import SignInView from "../view/sign-in/SignInView";
import SignUpSuccessView from "../view/sign-up/SignUpSuccessView";
import SignUpView from "../view/sign-up/SignUpView";
import Footer from "./Footer";
import Header from "./Header";

route("public.home", "/", "/");
route("public.sign-up", "sign-up/*", "/sign-up");
route("public.sign-up.success", "sign-up/success", "/sign-up/success");
route("public.sign-in", "sign-in/*", "/sign-in");
route("public.sign-out", "sign-out/*", "/sign-out");
route("public.session-expired", "session-expired/*", "/session-expired");

export const PublicSite = () => {
	return (
		<SiderLayout
			header={<Header/>}
			menu={
				<Routes>
					<Route path={"*"} element={
						<BaseMenu>
							<MenuDivider/>
							<MenuItem key={"public.home"} id={"public.home"} href={link("public.home")} icon={<HomeIcon/>}/>
							<MenuDivider/>
							<MenuItem key={"public.sign-up"} id={"public.sign-up"} href={link("public.sign-up")} icon={<SignUpIcon/>}/>
							<MenuItem key={"public.sign-in"} id={"public.sign-in"} href={link("public.sign-in")} icon={<SignInIcon/>}/>
						</BaseMenu>}
					/>
				</Routes>
			}
			router={
				<Routes>
					<Route path={match("public.sign-up")} element={<SignUpView/>}/>
					<Route path={match("public.sign-up.success")} element={<SignUpSuccessView/>}/>
					<Route path={match("public.sign-in")} element={<SignInView/>}/>
					<Route path={match("public.sign-out")} element={<SignedOutView link={link("public.home")}/>}/>
					<Route path={match("public.session-expired")} element={<SessionExpiredView link={link("public.home")}/>}/>
					<Route path={"/"} element={<HomeView/>}/>
					<Route path={"*"} element={<NotFoundView/>}/>
				</Routes>
			}
			footer={<Footer/>}
		/>
	);
};
