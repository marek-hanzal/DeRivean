import {Menu} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onOpenMenu} from "redux/menu/open/action";
import {getOpenMenu} from "redux/menu/open/selector";

const CommonMenu = (
	{
		t,
		open = [],
		selected = [],
		openState,
		onOpenChange,
		translation,
		items = [],
	}) =>
	<Menu
		mode='inline'
		selectable={true}
		defaultOpenKeys={openState || open}
		selectedKeys={selected}
		onOpenChange={onOpenChange}
		style={{height: "100vh"}}
	>
		{items.map(item => item === "-" ? <Menu.Divider/> :
			<Menu.Item key={item.href} icon={item.icon}>
				<Link to={item.href}>{t(`${translation}.${item.label}.menu`)}</Link>
			</Menu.Item>
		)}
	</Menu>
;

export default connect(
	state => ({
		openState: getOpenMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onOpenMenu(open)),
	})
)(withTranslation()(CommonMenu));
