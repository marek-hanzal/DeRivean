import {Menu} from "antd";
import {useTranslation} from "react-i18next";

const MenuGroup = ({id, icon, ...props}) => {
	const {t} = useTranslation();
	return (
		// <Menu.ItemGroup key={id} title={t(`${id}.menu`)} icon={icon} {...props}/>
		<Menu.SubMenu title={t(`${id}.menu`)} icon={icon} {...props}/>
	);
};

export default MenuGroup;
