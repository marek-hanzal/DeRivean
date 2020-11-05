import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const MenuItem = (props) => {
	const {t} = useTranslation();
	return (
		<Menu.Item icon={props.icon} {...props}>
			<Link to={props.href}>{t(`${props.id}.menu`)}</Link>
		</Menu.Item>
	);
};

MenuItem.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	href: PropTypes.string.isRequired,
};

export default MenuItem;
