import {Menu} from "antd";
import HistoryLink from "component/table/HistoryLink";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {generatePath, useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {MenuRedux} from "redux/menu/redux";
import {SessionRedux} from "redux/session/redux";

function RenderItem(item, index) {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const history = useSelector(SessionRedux.selector.getHistory);
	const href = generatePath(item.href || "", params);
	const key = item.key || index;
	switch (item.href) {
		case "-":
			return <Menu.Divider key={index}/>;
		case "back":
			return (
				<Menu.Item key={key} icon={item.icon} onClick={() => {
					navigate(history.pop() || -1);
					dispatch(SessionRedux.history(history));
				}}>
					{t(`${item.key}.menu`)}
				</Menu.Item>
			);
		default:
			return (
				<Menu.Item key={key} icon={item.icon}>
					{
						item.history ?
							<HistoryLink to={href} text={t(`${item.key}.menu`)}/> :
							<Link to={href}>{t(`${item.key}.menu`)}</Link>
					}
				</Menu.Item>
			);
	}
}

const BaseMenu = ({items = []}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
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
							{item.items.map((groupItem, groupIndex) => RenderItem(groupItem, groupIndex))}
						</Menu.SubMenu>
					);
				}
				return RenderItem(item, index);
			})}
		</Menu>
	);
};

export default BaseMenu;
