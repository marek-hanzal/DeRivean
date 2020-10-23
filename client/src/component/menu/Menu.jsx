import {Menu as AtMenu} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getMenuItem} from "redux/menu/selector";

const Menu = (
	{
		t,
		open = [],
		selected = [],
		items = [],
	}) => {
		return (
			<AtMenu
				mode="inline"
				selectable={true}
				defaultOpenKeys={open}
				selectedKeys={selected || []}
				style={{height: "100vh"}}
			>
				{items.map((item, index) => {
					return item === "-" ? <AtMenu.Divider key={index}/> :
						<AtMenu.Item key={item.key} icon={item.icon}>
							<Link to={item.href}>{t(`${item.key}.menu`)}</Link>
						</AtMenu.Item>;
				})}
			</AtMenu>
		);
	}
;

export default connect(
	state => ({
		selected: getMenuItem(state),
	}),
	dispatch => ({})
)(withTranslation()(Menu));
