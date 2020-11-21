import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import { BaseLayout } from "component/layout/BaseLayout";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import HomeView from "site/public/view/HomeView";
import SessionExpiredView from "site/public/view/SessionExpiredView";
import SignUpSuccessView from "site/public/view/sign-up/SignUpSuccessView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const link = Routes.public;

const Site = () =>
	<BaseLayout
		header={<Header/>}
		menu={
			<BaseRoutes
				routes={[
					route("*", <BaseMenu>
						<MenuDivider/>
						<MenuItem key={"public.home"} id={"public.home"} href={link} icon={<HomeIcon/>}/>
						<MenuDivider/>
						<MenuItem key={"public.sign-up"} id={"public.sign-up"} href={link.signUp} icon={<SignUpIcon/>}/>
						<MenuItem key={"public.sign-in"} id={"public.sign-in"} href={link.signIn} icon={<SignInIcon/>}/>
					</BaseMenu>),
				]}
			/>
		}
		router={
			<BaseRoutes
				routes={[
					route(link.signUp.match(), <SignUpView/>),
					route(link.signUpSuccess.match(), <SignUpSuccessView/>),
					route(link.signIn.match(), <SingInView/>),
					route(link.signOut.match(), <SingOutView/>),
					route(link.sessionExpired.match(), <SessionExpiredView/>),
					route("/", <HomeView/>),
					route("*", <NotFoundView/>),
				]}
			/>
		}
		footer={<Footer/>}
	/>
;

export default Site;
