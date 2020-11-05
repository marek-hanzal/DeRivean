import BackIcon from "component/icon/BackIcon";
import Routes from "site/Routes";
import menuItem from "utils/menu/menuItem";

const menuRoot = () => {
	return menuItem(Routes.root.link(), "root.home", <BackIcon/>);
};

export default menuRoot;
