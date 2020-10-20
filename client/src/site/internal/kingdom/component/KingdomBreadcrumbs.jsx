import {CrownOutlined, HomeOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const KingdomBreadcrumbs = ({t}) =>
	<>
		<Route exact={true} path={KingdomPath.home}>
			<Breadcrumb>
				<Breadcrumb.Item key={InternalPath.root}>
					<Link to={InternalPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={KingdomPath.home}>
					<CrownOutlined/>
					<span>{t("internal.kingdom.home.breadcrumb")}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
	</>
;

export default withTranslation()(KingdomBreadcrumbs);
