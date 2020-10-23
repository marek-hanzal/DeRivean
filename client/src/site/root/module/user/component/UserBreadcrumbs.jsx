import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const UserBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	UserPath.root,
	<UserDashboardIcon/>,
	"root.user"
);

export default UserBreadcrumbs;
