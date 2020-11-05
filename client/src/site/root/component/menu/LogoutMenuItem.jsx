import SignOutIcon from "component/icon/SignOutIcon";
import MenuItem from "component/menu/MenuItem";
import PropTypes from "prop-types";
import Routes from "site/Routes";

const LogoutMenuItem = ({key, props}) => {
	return (
		<MenuItem key={key} href={Routes.root.signOut.link()} icon={<SignOutIcon/>} {...props}/>
	);
};

LogoutMenuItem.propTypes = {
	key: PropTypes.string.isRequired,
};

export default LogoutMenuItem;
