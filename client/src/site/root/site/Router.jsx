import SingOutView from "component/view/SingOutView";
import {Route, Routes} from "react-router";
import BlogPath from "site/root/module/blog/site/BlogPath";
import BlogRouter from "site/root/module/blog/site/BlogRouter";
import UserPath from "site/root/module/user/site/UserPath";
import UserRouter from "site/root/module/user/site/UserRouter";
import RootPath from "site/root/site/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route path={RootPath.signIn} element={<SingInView/>}/>
			<Route path={RootPath.signOut} element={<SingOutView translation={"root"}/>}/>
			<Route path={UserPath.root + "/*"} element={<UserRouter/>}/>
			<Route path={BlogPath.root + "/*"} element={<BlogRouter/>}/>
			<Route path={"/"} element={<HomeView/>}/>
		</Route>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default Router;
