import BackIcon from "component/icon/BackIcon";
import MenuItem from "component/menu/MenuItem";
import Routes from "site/Routes";

const HomeMenuItem = (props) => {
	return (
		<MenuItem id={"game.home"} href={Routes.game} icon={<BackIcon/>} {...props}/>
	);
};

export default HomeMenuItem;
