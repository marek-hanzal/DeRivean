import {CrownOutlined, HomeOutlined, MehOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const KingdomHeroesBreadcrumbs = ({t}) =>
	<Breadcrumb>
		<Breadcrumb.Item key={InternalPath.root}>
			<Link to={InternalPath.root}><HomeOutlined/></Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={KingdomPath.home}>
			<Link to={KingdomPath.home}><CrownOutlined/>&nbsp;{t("internal.kingdom.home.breadcrumb")}</Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={KingdomHeroesPath.home}>
			<span><MehOutlined/>&nbsp;{t("internal.kingdom.heroes.home.breadcrumb")}</span>
		</Breadcrumb.Item>
	</Breadcrumb>
;

export default withTranslation()(KingdomHeroesBreadcrumbs);
