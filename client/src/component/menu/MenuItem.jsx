import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const MenuItem = ({id, icon, href, ...props}) => {
	const {t} = useTranslation();
	return (
		<Menu.Item key={id} icon={icon} {...props}>
			<Link to={href}>{t(`${id}.menu`)}</Link>
		</Menu.Item>
	);
};

MenuItem.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	href: PropTypes.string.isRequired,
};

export default MenuItem;
