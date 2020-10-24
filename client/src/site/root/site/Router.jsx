import BaseRoutes from "component/route/BaseRoutes";
import SingOutView from "component/view/SingOutView";
import BlogPath from "site/root/module/blog/site/BlogPath";
import BlogRouter from "site/root/module/blog/site/BlogRouter";
import UserPath from "site/root/module/user/site/UserPath";
import UserRouter from "site/root/module/user/site/UserRouter";
import RootPath from "site/root/site/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={{
			[RootPath.signIn]: <SingInView/>,
			[RootPath.signOut]: <SingOutView id={"root"}/>,
			[UserPath.root + "/*"]: <UserRouter/>,
			[BlogPath.root + "/*"]: <BlogRouter/>,
			"/": <HomeView/>,
			"*": <NotFoundView/>,
		}}
	/>
;

export default Router;
