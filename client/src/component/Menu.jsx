import {Menu as AntdMenu} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Route, Switch, useParams} from "react-router";
import {Link} from "react-router-dom";
import {onMenuOpen} from "redux/menu/action";
import {getOpenMenu} from "redux/menu/selector";

function rehref(href, params) {
	for (let [key, value] of Object.entries(params)) {
		href = href.replace(":" + key, value);
	}
	return href;
}

const Menu = (
	{
		t,
		open = [],
		selected = [],
		openState,
		onOpenChange,
		items = [],
	}) => {
		const params = useParams();
		return (
			<Switch>
				{items.map(item =>
					<Route key={item.path} path={item.path}>
						<AntdMenu
							key={item.path}
							mode='inline'
							selectable={true}
							defaultOpenKeys={openState || open}
							selectedKeys={selected}
							onOpenChange={onOpenChange}
							style={{height: "100vh"}}
						>
							{item.menu.map((item, index) => {
								const href = rehref(item.href || "", params);
								return item === "-" ? <AntdMenu.Divider key={index}/> :
									<AntdMenu.Item key={href} icon={item.icon}>
										<Link to={href}>{t(`${item.label}.menu`)}</Link>
									</AntdMenu.Item>;
							})}
						</AntdMenu>
					</Route>
				)}
			</Switch>
		);
	}
;

export default connect(
	state => ({
		openState: getOpenMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onMenuOpen(open)),
	})
)(withTranslation()(Menu));
