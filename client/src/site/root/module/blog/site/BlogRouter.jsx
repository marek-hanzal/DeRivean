import {Route, Routes} from "react-router";
import BlogPath from "site/root/module/blog/site/BlogPath";
import CreateView from "site/root/module/blog/view/create/CreateView";
import DashboardView from "site/root/module/blog/view/dashboard/DashboardView";
import NotFoundView from "view/NotFoundView";

const BlogRouter = () =>
	<Routes>
		<Route path={BlogPath.dashboard} element={<DashboardView/>}/>
		<Route path={BlogPath.create} element={<CreateView/>}/>
		<Route path={"*"} element={<NotFoundView/>}/>
	</Routes>
;

export default BlogRouter;
