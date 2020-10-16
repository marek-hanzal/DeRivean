import React from 'react';
import {Switch} from "react-router-dom";
import EntityBreadcrumbs from "../entity/component/EntityBreadcrumbs";

const RootBreadcrumbs = () =>
	<Switch>
		<EntityBreadcrumbs/>

		{/*<Breadcrumb>*/}
		{/*	<Breadcrumb.Item key={RootPath.root}>*/}
		{/*		<Link to={RootPath.root}/>*/}
		{/*		<HomeOutlined/>*/}
		{/*	</Breadcrumb.Item>*/}
		{/*	<EntityBreadcrumbs/>*/}
		{/*</Breadcrumb>*/}
	</Switch>
;

export default RootBreadcrumbs;
