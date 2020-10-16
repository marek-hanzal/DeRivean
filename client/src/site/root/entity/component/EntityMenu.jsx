import React from 'react';
import {Route} from "react-router";
import BaseMenu from "../../../../component/BaseMenu";
import {Menu} from "antd";
import {HomeOutlined} from "@ant-design/icons";
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
		</BaseMenu>
	</Route>
;

export default withTranslation()(EntityMenu);
