import UserHomeMenu from "site/root/module/user/view/home/component/UserHomeMenu";

const UserMenu = () => [].concat(
	UserHomeMenu(),
	// commonMenu(
	// 	UserPath.root,
	// 	<UserDashboardIcon/>,
	// 	"root.user"
	// )
);

export default UserMenu;
