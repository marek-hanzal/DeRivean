import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const MenuGroup = ({key, icon, ...props}) => {
	const {t} = useTranslation();
	return (
		// <Menu.ItemGroup key={key} title={t(`${key}.menu`)} icon={icon} {...props}/>
		<Menu.SubMenu title={t(`${key}.menu`)} icon={icon} {...props}/>
	);
};

MenuGroup.propTypes = {
	key: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
};

export default MenuGroup;
