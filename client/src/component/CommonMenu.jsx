import {Menu} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
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
		items = [],
	}) =>
	<Switch>
		{items.map(item =>
			<Route path={item.path}>
				<Menu
					mode='inline'
					selectable={true}
					defaultOpenKeys={openState || open}
					selectedKeys={selected}
					onOpenChange={onOpenChange}
					style={{height: "100vh"}}
				>
					{item.menu.map(item => item === "-" ? <Menu.Divider/> :
						<Menu.Item key={item.href} icon={item.icon}>
							<Link to={item.href}>{t(`${item.label}.menu`)}</Link>
						</Menu.Item>
					)}
				</Menu>
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
)(withTranslation()(CommonMenu));
