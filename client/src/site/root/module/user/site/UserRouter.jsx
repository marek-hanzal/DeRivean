import {Route, Routes} from "react-router";
import UserPath from "site/root/module/user/site/UserPath";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/DashboardView";
import NotFoundView from "view/NotFoundView";

const UserRouter = () =>
	<Routes>
		<Route path={UserPath.dashboard} element={<DashboardView/>}/>
		<Route path={UserPath.create} element={<CreateView/>}/>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default UserRouter;
