import SingOutView from "component/view/SingOutView";
import {Route, Routes} from "react-router";
import RootPath from "site/root/site/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route path={RootPath.signIn} element={<SingInView/>}/>
			<Route path={RootPath.signOut} element={<SingOutView translation={"root"}/>}/>
			<Route element={<HomeView/>}/>
		</Route>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default Router;
