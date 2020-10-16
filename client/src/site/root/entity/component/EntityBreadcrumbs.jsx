import React from 'react';
import {Route, Switch} from "react-router";
import Breadcrumb from "antd/lib/breadcrumb";
import RootPath from "../../router/RootPath";
import {Link} from "react-router-dom";
import {FormOutlined, HomeOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons"
import EntityPath from "../router/EntityPath";
import {withTranslation} from "react-i18next";

const EntityBreadcrumbs = ({t}) =>
	<Switch>
		<Route exact={true} path={EntityPath.home}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}/>
					<HomeOutlined/>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={EntityPath.home}>
					<RobotOutlined/>
					<span>{t('root.entity.home.breadcrumb')}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
		<Route exact={true} path={EntityPath.create}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}/>
					<HomeOutlined/>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={EntityPath.home}>
					<RobotOutlined/>
					<Link to={EntityPath.home}>{t('root.entity.home.breadcrumb')}</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={EntityPath.create}>
					<FormOutlined/>
					<span>{t('root.entity.create.breadcrumb')}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
		<Route exact={true} path={EntityPath.list}>
			<Breadcrumb>
				<Breadcrumb.Item key={RootPath.root}>
					<Link to={RootPath.root}/>
					<HomeOutlined/>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={EntityPath.home}>
					<RobotOutlined/>
					<Link to={EntityPath.home}>{t('root.entity.home.breadcrumb')}</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item key={EntityPath.list}>
					<UnorderedListOutlined/>
					<span>{t('root.entity.list.breadcrumb')}</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Route>
	</Switch>
;

export default withTranslation()(EntityBreadcrumbs);
