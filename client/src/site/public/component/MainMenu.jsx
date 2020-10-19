import {CarryOutOutlined, HomeOutlined, LoginOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";

const MainMenu = (
	{
		t,
		...props
	}) =>
	<BaseMenu {...props}>
		<Menu.Item key={PublicPath.root} icon={<HomeOutlined/>}>
			<Link to={PublicPath.root}>{t("public.home.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key={PublicPath.signUp} icon={<CarryOutOutlined/>}>
			<Link to={PublicPath.signUp}>{t("public.sign-up.menu")}</Link>
		</Menu.Item>
		<Menu.Item key={PublicPath.signIn} icon={<LoginOutlined/>}>
			<Link to={PublicPath.signIn}>{t("public.sign-in.menu")}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
