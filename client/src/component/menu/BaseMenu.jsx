import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {generatePath, useParams} from "react-router";
import {Link} from "react-router-dom";
import {getMenuItem} from "redux/menu/selector";

const BaseMenu = ({items = []}) => {
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
				if (item.group) {
					return (
						<Menu.SubMenu key={index} title={t(`${item.group}.menu`)} icon={item.icon}>
							{item.items.map((groupItem, groupIndex) => {
								const href = generatePath(groupItem.href || "", params);
								const key = groupItem.key || groupIndex;
								return groupItem.href === "-" ? <Menu.Divider key={groupIndex}/> :
									<Menu.Item key={key} icon={groupItem.icon}>
										<Link to={href}>{t(`${groupItem.key}.menu`)}</Link>
									</Menu.Item>;
							})}
						</Menu.SubMenu>
					);
				}
				const href = generatePath(item.href || "", params);
				const key = item.key || index;
				return (
					item.href === "-" ? <Menu.Divider key={index}/> :
						<Menu.Item key={key} icon={item.icon}>
							<Link to={href}>{t(`${item.key}.menu`)}</Link>
						</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default BaseMenu;
