import SignOutIcon from "component/icon/SignOutIcon";
import MenuItem from "component/menu/MenuItem";
import Routes from "site/Routes";

const LogoutMenuItem = (props) => {
	return (
		<MenuItem id={"root.sign-out"} href={Routes.root.signOut.link()} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
