import BaseRoutes from "component/route/BaseRoutes";
import UserView from "site/root/module/user/view/user/UserView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.user.context.user.match(), <UserView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserContextRoute = () => route(Routes.root.user.context.match(), <Router/>);

export {
	UserContextRoute,
};
