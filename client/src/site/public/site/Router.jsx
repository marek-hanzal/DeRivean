import BaseRoutes from "component/route/BaseRoutes";
import PublicPath from "site/public/site/PublicPath";
import HomeView from "site/public/view/HomeView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={{
			[PublicPath.signUp]: <SignUpView/>,
			[PublicPath.signIn]: <SingInView/>,
			[PublicPath.signOut]: <SingOutView/>,
			"/": <HomeView/>,
			"*": <NotFoundView/>,
		}}
	/>;

export default Router;
