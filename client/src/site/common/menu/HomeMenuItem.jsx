import BackIcon from "component/icon/BackIcon";
import MenuItem from "component/menu/MenuItem";

const HomeMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.home`} href={props.href} icon={<BackIcon/>} {...props}/>
	);
};

export default HomeMenuItem;
