import BaseRoutes from "component/route/BaseRoutes";
import BlogPath from "site/root/module/blog/site/BlogPath";
import CreateView from "site/root/module/blog/view/create/CreateView";
import DashboardView from "site/root/module/blog/view/dashboard/DashboardView";
import NotFoundView from "view/NotFoundView";

const BlogRouter = () =>
	<BaseRoutes
		routes={{
			[BlogPath.dashboard]: <DashboardView/>,
			[BlogPath.create]: <CreateView/>,
			"*": <NotFoundView/>,
		}}
	/>
;

export default BlogRouter;
