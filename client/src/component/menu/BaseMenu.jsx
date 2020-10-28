import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {generatePath, useParams} from "react-router";
import {Link} from "react-router-dom";
import MenuRedux from "redux/menu/redux";

const BaseMenu = ({items = []}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const selected = useSelector(MenuRedux.selector.getSelected);
	const opened = useSelector(MenuRedux.selector.getOpened);
	return (
		<Menu
			mode="inline"
			selectable={true}
			selectedKeys={selected}
			openKeys={opened}
			style={{height: "100vh"}}
			onOpenChange={([_, open]) => dispatch(MenuRedux.open([open]))}
		>
			{items.map((item, index) => {
				if (item.group) {
					return (
						<Menu.SubMenu key={item.group} title={t(`${item.group}.menu`)} icon={item.icon}>
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
