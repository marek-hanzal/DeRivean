import BaseRoutes from "component/route/BaseRoutes";
import UserPath from "site/root/module/user/site/UserPath";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/dashboard/DashboardView";
import ListView from "site/root/module/user/view/list/ListView";
import NotFoundView from "view/NotFoundView";

const UserRouter = () =>
	<BaseRoutes
		routes={{
			[UserPath.dashboard]: <DashboardView/>,
			[UserPath.create]: <CreateView/>,
			[UserPath.list]: <ListView/>,
			"*": <NotFoundView/>,
		}}
	/>
;

export default UserRouter;
