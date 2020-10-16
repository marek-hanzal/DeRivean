import React from 'react';
import {Route} from "react-router";
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
	<Route path={EntityPath.root}>
		<BaseMenu>
			<Menu.Item key={Path.root} icon={<HomeOutlined/>}>
				<Link to={Path.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
		</BaseMenu>
	</Route>
;

export default withTranslation()(EntityMenu);
