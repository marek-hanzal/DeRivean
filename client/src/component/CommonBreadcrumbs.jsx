import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

const CommonBreadcrumbs = (
	{
		t,
		items,
	}) =>
	<Switch>
		{items.map(item =>
			<Route path={item.path}>
				<Breadcrumb>
					{item.items.map(breadcrumb =>
						breadcrumb.label ?
							<Breadcrumb.Item key={breadcrumb.href}>
								<Link to={breadcrumb.href}>{breadcrumb.icon}&nbsp;{t(`${breadcrumb.label}.breadcrumb`)}</Link>
							</Breadcrumb.Item> :
							<Breadcrumb.Item key={breadcrumb.href}>
								<Link to={breadcrumb.href}>{breadcrumb.icon}</Link>
							</Breadcrumb.Item>
					)}
				</Breadcrumb>
			</Route>
		)}
	</Switch>
;

export default withTranslation()(CommonBreadcrumbs);
