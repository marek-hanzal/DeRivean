import {Route, Routes} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import HomeView from "site/public/view/HomeView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import NotFoundView from "view/NotFoundView";

const PublicRouter = () =>
	<Routes>
		<Route path={PublicPath.root} component={HomeView}/>
		<Route path={PublicPath.signUp} component={SignUpView}/>
		<Route path={PublicPath.signIn} component={SingInView}/>
		<Route path={PublicPath.signOut} component={SingOutView}/>
		<Route component={NotFoundView}/>
	</Routes>
;

export default PublicRouter;
