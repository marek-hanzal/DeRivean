import {FormOutlined, HomeOutlined, RobotOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const PlayerCreateBreadcrumbs = ({t}) =>
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
;

export default withTranslation()(PlayerCreateBreadcrumbs);
