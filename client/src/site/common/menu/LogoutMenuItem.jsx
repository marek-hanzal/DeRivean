import SignOutIcon from "component/icon/SignOutIcon";
import MenuItem from "component/menu/MenuItem";

const LogoutMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.sign-out`} href={props.href} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
