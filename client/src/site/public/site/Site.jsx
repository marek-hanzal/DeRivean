import {BaseLayout, BaseMenu, link, match, MenuDivider, MenuItem, NotFoundView, route, SessionExpiredView, SignedOutView} from "@leight-core/leight";
import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import {Route, Routes} from "react-router-dom";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import HomeView from "site/public/view/HomeView";
import SignInView from "site/public/view/sign-in/SignInView";
import SignUpSuccessView from "site/public/view/sign-up/SignUpSuccessView";
import SignUpView from "site/public/view/sign-up/SignUpView";

route("public.home", "/", "/");
route("public.sign-up", "sign-up/*", "/sign-up");
route("public.sign-up.success", "sign-up/success", "/sign-up/success");
route("public.sign-in", "sign-in/*", "/sign-in");
route("public.sign-out", "sign-out/*", "/sign-out");
route("public.session-expired", "session-expired/*", "/session-expired");

export const PublicSite = () => {
	return (
		<BaseLayout
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
