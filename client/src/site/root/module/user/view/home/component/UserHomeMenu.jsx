import HomeIcon from "component/icon/HomeIcon";
import RootPath from "site/root/router/RootPath";
import menuItem from "utils/menu/menuItem";

const UserHomeMenu = () => [].concat(
	menuItem(RootPath.root, "root.home", <HomeIcon/>),
	menuItem("/user/:user/kingdom/dashboard", "dfsdfdf", <HomeIcon/>),
);

export default UserHomeMenu;
