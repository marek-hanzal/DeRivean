import {Route, Routes} from "react-router";
import UserPath from "site/root/module/user/router/UserPath";
import DashboardView from "site/root/module/user/view/DashboardView";

const UserRouter = () =>
	<Routes>
		<Route path={UserPath.dashboard} component={DashboardView}/>
	</Routes>
;

export default UserRouter;
