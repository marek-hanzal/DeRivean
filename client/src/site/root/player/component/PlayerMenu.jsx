import {withTranslation} from "react-i18next";
import {default as PlayerPath} from "../../player/router/Path";
import BaseMenu from "../../../../component/BaseMenu";
import {Menu} from "antd";
import Path from "../../router/Path";
import {FormOutlined, FundOutlined, HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import React from "react";

const PlayerMenu = ({t}) =>
	<Route path={PlayerPath.root}>
		<BaseMenu>
			<Menu.Item key={Path.root} icon={<HomeOutlined/>}>
				<Link to={Path.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key={PlayerPath.home} icon={<FundOutlined/>}>
				<Link to={PlayerPath.home}>{t('root.player.home.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={PlayerPath.create} icon={<FormOutlined/>}>
				<Link to={PlayerPath.create}>{t('root.player.create.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={PlayerPath.list} icon={<UnorderedListOutlined/>}>
				<Link to={PlayerPath.list}>{t('root.player.list.menu')}</Link>
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default withTranslation()(PlayerMenu);
