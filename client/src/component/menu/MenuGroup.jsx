import {Menu} from "antd";
import {useTranslation} from "react-i18next";

const MenuGroup = ({id, icon, ...props}) => {
	const {t} = useTranslation();
	return (
		<Menu.SubMenu title={t(`${id}.menu`)} icon={icon} {...props}/>
	);
};

export default MenuGroup;
