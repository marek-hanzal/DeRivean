import {Route, Routes} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import HomeView from "site/public/view/HomeView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import NotFoundView from "view/NotFoundView";

const PublicRouter = () =>
	<Routes>
		<Route path={PublicPath.root}>
			<Route path={PublicPath.signUp} element={<SignUpView/>}/>
			<Route path={PublicPath.signIn} element={<SingInView/>}/>
			<Route path={PublicPath.signOut} element={<SingOutView/>}/>
			<Route element={<HomeView/>}/>
		</Route>
		<Route element={<NotFoundView/>}/>
	</Routes>
;

export default PublicRouter;
