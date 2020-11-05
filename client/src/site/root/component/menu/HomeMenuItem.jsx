import BackIcon from "component/icon/BackIcon";
import MenuItem from "component/menu/MenuItem";
import Routes from "site/Routes";

const HomeMenuItem = () => {
	return (
		<MenuItem id={"root.home"} href={Routes.root.link()} icon={<BackIcon/>}/>
	);
};

export default HomeMenuItem;
