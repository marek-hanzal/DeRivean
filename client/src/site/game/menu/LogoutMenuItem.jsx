import SignOutIcon from "component/icon/SignOutIcon";
import MenuItem from "component/menu/MenuItem";
import Routes from "site/Routes";

const LogoutMenuItem = (props) => {
	return (
		<MenuItem id={"game.sign-out"} href={Routes.game.signOut} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
