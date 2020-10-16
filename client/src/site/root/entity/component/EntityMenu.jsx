import React from 'react';
import {FormOutlined, FundOutlined, HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Route} from "react-router";
import BaseMenu from "../../../../component/BaseMenu";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import RootPath from "../../router/RootPath";
import EntityPath from "../router/EntityPath";

const EntityMenu = (
	{
		t,
	}) =>
	<Route path={EntityPath.root}>
		<BaseMenu>
			<Menu.Item key={RootPath.root} icon={<HomeOutlined/>}>
				<Link to={RootPath.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key={EntityPath.root} icon={<FundOutlined/>}>
				<Link to={EntityPath.root}>{t('root.entity.home.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.create} icon={<FormOutlined/>}>
				<Link to={EntityPath.create}>{t('root.entity.create.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.list} icon={<UnorderedListOutlined/>}>
				<Link to={EntityPath.list}>{t('root.entity.list.menu')}</Link>
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default withTranslation()(EntityMenu);
