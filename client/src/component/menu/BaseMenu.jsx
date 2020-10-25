import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {generatePath, useParams} from "react-router";
import {Link} from "react-router-dom";
import {getMenuItem} from "redux/menu/selector";

const BaseMenu = (
	{
		items = [],
	}) => {
	const {t} = useTranslation();
	const params = useParams();
	const selected = useSelector(getMenuItem);
	return (
		<Menu
			mode="inline"
			selectable={true}
			selectedKeys={selected || []}
			style={{height: "100vh"}}
		>
			{items.map((item, index) => {
				const href = generatePath(item.href || "", params);
				return (
					item === "-" ? <Menu.Divider key={index}/> :
						<Menu.Item key={item.key || index} icon={item.icon}>
							<Link to={href}>{t(`${item.key}.menu`)}</Link>
						</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default BaseMenu;
