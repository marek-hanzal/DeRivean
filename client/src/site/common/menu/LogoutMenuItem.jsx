import {MenuItem} from "@leight-core/leight";
import SignOutIcon from "component/icon/SignOutIcon";

const LogoutMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.sign-out`} href={props.href} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
