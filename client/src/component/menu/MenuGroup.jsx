import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const MenuGroup = ({id, icon, ...props}) => {
	const {t} = useTranslation();
	return (
		<Menu.ItemGroup key={id} title={t(`${id}.menu`)} icon={icon} {...props}/>
	);
};

MenuGroup.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
};

export default MenuGroup;
