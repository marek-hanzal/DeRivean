import {Menu as AntdMenu} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {onOpenMenu} from "redux/menu/open/action";
import {getOpenMenu} from "redux/menu/open/selector";

const Menu = (
	{
		t,
		open = [],
		selected = [],
		openState,
		onOpenChange,
		items = [],
	}) =>
	<Switch>
		{items.map(item =>
			<Route path={item.path}>
				<AntdMenu
					mode='inline'
					selectable={true}
					defaultOpenKeys={openState || open}
					selectedKeys={selected}
					onOpenChange={onOpenChange}
					style={{height: "100vh"}}
				>
					{item.menu.map(item => item === "-" ? <AntdMenu.Divider/> :
						<AntdMenu.Item key={item.href} icon={item.icon}>
							<Link to={item.href}>{t(`${item.label}.menu`)}</Link>
						</AntdMenu.Item>
					)}
				</AntdMenu>
			</Route>
		)}
	</Switch>
;

export default connect(
	state => ({
		openState: getOpenMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onOpenMenu(open)),
	})
)(withTranslation()(Menu));
