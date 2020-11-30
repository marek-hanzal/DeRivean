import {MenuItem} from "@leight-core/leight";
import BackIcon from "component/icon/BackIcon";

const HomeMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.home`} href={props.href} icon={<BackIcon/>} {...props}/>
	);
};

export default HomeMenuItem;
