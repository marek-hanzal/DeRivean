import SignOutIcon from "component/icon/SignOutIcon";
import Routes from "site/Routes";
import menuItem from "utils/menu/menuItem";

const menuLogout = () => {
	return menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>);
};

export default menuLogout;
