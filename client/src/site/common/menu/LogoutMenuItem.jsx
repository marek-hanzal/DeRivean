import SignOutIcon from "component/icon/SignOutIcon";
import MenuItem from "component/menu/MenuItem";

const LogoutMenuItem = (props) => {
	return (
		<MenuItem id={`${props.id}.sign-out`} href={props.href} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
