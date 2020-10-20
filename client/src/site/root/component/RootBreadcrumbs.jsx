import {HomeOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import EntityBreadcrumbs from "site/root/entity/component/breadcrumbs/EntityBreadcrumbs";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerBreadcrumbs from "site/root/player/component/breadcrumbs/PlayerBreadcrumbs";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const RootBreadcrumbs = () =>
	<Switch>
		<Route path={PlayerPath.root} component={PlayerBreadcrumbs}/>
		<Route path={EntityPath.root} component={EntityBreadcrumbs}/>
		<Route path={RootPath.root} render={() => (
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
			</Breadcrumb>
		)}/>
	</Switch>
;

export default RootBreadcrumbs;
