import React from 'react';
import {Route, Switch} from "react-router";
import {default as EntityPath} from "../router/Path";
import BaseMenu from "../../../../component/BaseMenu";
import {Menu} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Path from "../../router/Path";

const EntityMenu = (
	{
		t,
	}) =>
	<Switch>
		<Route path={EntityPath.root}>
			<BaseMenu
				style={{
					minHeight: '100vh',
				}}
			>
				<Menu.Item key={Path.root}>
					<HomeOutlined/>
					<Link to={Path.root}>{t('root.home.menu')}</Link>
				</Menu.Item>
				<Menu.Divider/>
			</BaseMenu>
		</Route>
	</Switch>
;

export default withTranslation()(EntityMenu);
