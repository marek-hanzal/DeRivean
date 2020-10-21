import {FormOutlined, FundOutlined, HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import EntityPath from "site/root/module/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";

const EntityMenu = ({t, ...props}) =>
	<Route path={EntityPath.root}>
		<BaseMenu {...props}>
			<Menu.Item key={RootPath.root} icon={<HomeOutlined/>}>
				<Link to={RootPath.root}>{t("root.home.menu")}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key={EntityPath.home} icon={<FundOutlined/>}>
				<Link to={EntityPath.home}>{t("root.entity.home.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.list} icon={<UnorderedListOutlined/>}>
				<Link to={EntityPath.list}>{t("root.entity.list.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.create} icon={<FormOutlined/>}>
				<Link to={EntityPath.create}>{t("root.entity.create.menu")}</Link>
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default withTranslation()(EntityMenu);
