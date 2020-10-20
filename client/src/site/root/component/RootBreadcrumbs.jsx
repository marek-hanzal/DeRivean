import {HomeOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import EntityBreadcrumbs from "site/root/entity/component/EntityBreadcrumbs";
import PlayerBreadcrumbs from "site/root/player/component/PlayerBreadcrumbs";
import RootPath from "site/root/router/RootPath";

const RootBreadcrumbs = () =>
	<>
		<Route exact path={RootPath.root} render={() => (<Breadcrumb>
			<Breadcrumb.Item key={RootPath.root}>
				<Link to={RootPath.root}><HomeOutlined/></Link>
			</Breadcrumb.Item>
		</Breadcrumb>)}/>
		<PlayerBreadcrumbs/>
		<EntityBreadcrumbs/>
	</>
;

export default RootBreadcrumbs;
