import {HomeOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";

const ListBreadcrumbs = ({t}) =>
	<Breadcrumb>
		<Breadcrumb.Item key={RootPath.root}>
			<Link to={RootPath.root}><HomeOutlined/></Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={EntityPath.home}>
			<Link to={EntityPath.home}><RobotOutlined/>&nbsp;{t("root.entity.home.breadcrumb")}</Link>
		</Breadcrumb.Item>
		<Breadcrumb.Item key={EntityPath.list}>
			<span><UnorderedListOutlined/>&nbsp;{t("root.entity.list.breadcrumb")}</span>
		</Breadcrumb.Item>
	</Breadcrumb>
;

export default withTranslation()(ListBreadcrumbs);
