import {CrownOutlined, HomeOutlined, MehOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const ListBreadcrumbs = ({t}) =>
	<Breadcrumb>
		<Breadcrumb.Item key={InternalPath.root}>
			<Link to={InternalPath.root}><HomeOutlined/></Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={KingdomPath.home}>
			<Link to={KingdomPath.home}><CrownOutlined/>&nbsp;{t("internal.kingdom.home.breadcrumb")}</Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={KingdomHeroesPath.home}>
			<Link to={KingdomHeroesPath.home}><MehOutlined/>&nbsp;{t("internal.kingdom.heroes.home.breadcrumb")}</Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={KingdomHeroesPath.list}>
			<span><UnorderedListOutlined/>&nbsp;{t("internal.kingdom.heroes.list.breadcrumb")}</span>
		</Breadcrumb.Item>
	</Breadcrumb>
;

export default withTranslation()(ListBreadcrumbs);
