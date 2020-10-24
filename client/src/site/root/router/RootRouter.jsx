import SingOutView from "component/view/SingOutView";
import {Route, Routes} from "react-router";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route path={"sign-in"} element={<SingInView/>}/>
			<Route path={"sign-out"} element={<SingOutView translation={"root"}/>}/>
			<Route element={<HomeView/>}/>
		</Route>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default RootRouter;
