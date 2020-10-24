import {Menu} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getMenuItem} from "redux/menu/selector";

const BaseMenu = (
	{
		t,
		open = [],
		selected = [],
		items = [],
	}) =>
	<Menu
		mode="inline"
		selectable={true}
		defaultOpenKeys={open}
		selectedKeys={selected || []}
		style={{height: "100vh"}}
	>
		{items.map((item, index) => item === "-" ? <Menu.Divider key={index}/> :
			<Menu.Item key={item.key || index} icon={item.icon}>
				<Link to={item.href}>{t(`${item.key}.menu`)}</Link>
			</Menu.Item>)}
	</Menu>
;

export default connect(
	state => ({
		selected: getMenuItem(state),
	}),
	dispatch => ({})
)(withTranslation()(BaseMenu));
