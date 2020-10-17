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
		<Menu.Item key={PublicPath.registration} icon={<CarryOutOutlined/>}>
			<Link to={PublicPath.registration}>{t('public.registration.menu')}</Link>
		</Menu.Item>
		<Menu.Item key={PublicPath.login} icon={<LoginOutlined/>}>
			<Link to={PublicPath.login}>{t('public.login.menu')}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
