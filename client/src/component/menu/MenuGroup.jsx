import {Menu} from "antd";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const MenuGroup = ({id, ...props}) => {
	const {t} = useTranslation();
	return (
		<Menu.ItemGroup key={id} title={t(`${id}.menu`)} {...props}/>
	);
};

MenuGroup.propTypes = {
	id: PropTypes.string.isRequired,
};

export default MenuGroup;
