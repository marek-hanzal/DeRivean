import {HomeOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import KingdomBreadcrumbs from "site/internal/kingdom/component/KingdomBreadcrumbs";
import KingdomHeroesBreadcrumbs from "site/internal/kingdom/heroes/component/KingdomHeroesBreadcrumbs";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const InternalBreadcrumbs = () =>
	<Switch>
		<Route path={KingdomHeroesPath.root} component={KingdomHeroesBreadcrumbs}/>
		<Route path={KingdomPath.root} component={KingdomBreadcrumbs}/>
		<Route path={InternalPath.root} render={() => (
			<Breadcrumb>
				<Breadcrumb.Item key={InternalPath.root}>
					<Link to={InternalPath.root}><HomeOutlined/></Link>
				</Breadcrumb.Item>
			</Breadcrumb>
		)}/>
	</Switch>
;

export default InternalBreadcrumbs;
