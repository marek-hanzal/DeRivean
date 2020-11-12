import BackIcon from "component/icon/BackIcon";
import MenuItem from "component/menu/MenuItem";

const HomeMenuItem = (props) => {
	return (
		<MenuItem id={`${props.id}.home`} href={props.href} icon={<BackIcon/>} {...props}/>
	);
};

export default HomeMenuItem;
