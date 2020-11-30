import {BaseLayout, BaseMenu, link, match, MenuDivider, MenuItem, NotFoundView, SessionExpiredView, SignedOutView} from "@leight-core/leight";
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

export const PublicSite = () => {
	return (
		<BaseLayout
			header={<Header/>}
			menu={
				<Routes>
					<Route path={"*"} element={
						<BaseMenu>
							<MenuDivider/>
							<MenuItem key={"public.home"} id={"public.home"} href={link} icon={<HomeIcon/>}/>
							<MenuDivider/>
							<MenuItem key={"public.sign-up"} id={"public.sign-up"} href={link.signUp} icon={<SignUpIcon/>}/>
							<MenuItem key={"public.sign-in"} id={"public.sign-in"} href={link.signIn} icon={<SignInIcon/>}/>
						</BaseMenu>}
					/>
				</Routes>
			}
			router={
				<Routes>
					<Route path={link.signUp.match()} element={<SignUpView/>}/>
					<Route path={link.signUpSuccess.match()} element={<SignUpSuccessView/>}/>
					<Route path={link.signIn.match()} element={<SignInView/>}/>
					<Route path={match("public.sign-out")} element={<SignedOutView link={link("public")}/>}/>
					<Route path={match("public.session-expired")} element={<SessionExpiredView link={link("public")}/>}/>
					<Route path={"/"} element={<HomeView/>}/>
					<Route path={"*"} element={<NotFoundView/>}/>
				</Routes>
			}
			footer={<Footer/>}
		/>
	);
};
