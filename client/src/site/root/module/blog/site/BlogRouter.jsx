import BaseRoutes from "component/route/BaseRoutes";
import BlogPath from "site/root/module/blog/site/BlogPath";
import CreateView from "site/root/module/blog/view/create/CreateView";
import DashboardView from "site/root/module/blog/view/dashboard/DashboardView";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const BlogRouter = () =>
	<BaseRoutes
		routes={[
			route(BlogPath.dashboard, <DashboardView/>),
			route(BlogPath.create, <CreateView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

export default BlogRouter;
