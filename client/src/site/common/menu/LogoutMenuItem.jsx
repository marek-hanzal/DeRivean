import {MenuItem, SignOutIcon} from "@leight-core/leight";

const LogoutMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.sign-out`} href={props.href} icon={<SignOutIcon/>} {...props}/>
	);
};

export default LogoutMenuItem;
