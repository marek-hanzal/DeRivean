import {Route, Routes} from "react-router";
import UserPath from "site/root/module/user/site/UserPath";
import DashboardView from "site/root/module/user/view/DashboardView";
import NotFoundView from "view/NotFoundView";

const UserRouter = () =>
	<Routes>
		<Route path={UserPath.dashboard} element={<DashboardView/>}/>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default UserRouter;
