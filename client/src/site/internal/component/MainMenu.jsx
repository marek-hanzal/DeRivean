import {HomeOutlined, PoweroffOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import InternalPath from "site/internal/router/InternalPath";

const MainMenu = (
	{
		onLogout,
		t,
		...props
	}) =>
	<BaseMenu {...props}>
		<Menu.Item key={InternalPath.root} icon={<HomeOutlined/>}>
			<Link to={InternalPath.root}>{t("internal.home.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key='internal.logout' onClick={() => onLogout()} icon={<PoweroffOutlined/>}>
			{t("internal.logout.menu")}
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => alert("logout!")
	})
)(withTranslation()(MainMenu));
