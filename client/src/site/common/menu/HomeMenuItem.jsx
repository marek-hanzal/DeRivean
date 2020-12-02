import {BackIcon, MenuItem} from "@leight-core/leight";

const HomeMenuItem = ({id, ...props}) => {
	return (
		<MenuItem id={`${id}.home`} href={props.href} icon={<BackIcon/>} {...props}/>
	);
};

export default HomeMenuItem;
