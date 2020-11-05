import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const MenuItem = ({key, icon, href, ...props}) => {
	const {t} = useTranslation();
	return (
		<Menu.Item key={key} icon={icon} {...props}>
			<Link to={href}>{t(`${key}.menu`)}</Link>
		</Menu.Item>
	);
};

MenuItem.propTypes = {
	key: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	href: PropTypes.string.isRequired,
};

export default MenuItem;
