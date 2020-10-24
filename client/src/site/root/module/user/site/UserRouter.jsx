import BaseRoutes from "component/route/BaseRoutes";
import UserPath from "site/root/module/user/site/UserPath";
import ContextView from "site/root/module/user/view/context/ContextView";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/dashboard/DashboardView";
import ListView from "site/root/module/user/view/list/ListView";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const UserRouter = () =>
	<BaseRoutes
		routes={[
			route(UserPath.route.dashboard, <DashboardView/>),
			route(UserPath.route.create, <CreateView/>),
			route(UserPath.route.list, <ListView/>),
			route(UserPath.route.context, <ContextView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

export default UserRouter;
