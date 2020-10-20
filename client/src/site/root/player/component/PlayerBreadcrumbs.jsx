import {FormOutlined, HomeOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const PlayerBreadcrumbs = ({t}) =>
	<Switch>
		<Route exact path={PlayerPath.home}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={PlayerPath.home}>
					<span><RobotOutlined/>&nbsp;{t("root.player.home.breadcrumb")}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
		<Route exact path={PlayerPath.create}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={PlayerPath.home}>
					<Link to={PlayerPath.home}><RobotOutlined/>&nbsp;{t("root.player.home.breadcrumb")}</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={PlayerPath.create}>
					<span><FormOutlined/>&nbsp;{t("root.player.create.breadcrumb")}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
		<Route exact path={PlayerPath.list}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={PlayerPath.home}>
					<Link to={PlayerPath.home}><RobotOutlined/>&nbsp;{t("root.player.home.breadcrumb")}</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={PlayerPath.list}>
					<span><UnorderedListOutlined/>&nbsp;{t("root.player.list.breadcrumb")}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
	</Switch>
;

export default withTranslation()(PlayerBreadcrumbs);
