import React from 'react';
import Breadcrumb from "antd/lib/breadcrumb";
import {HomeOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom";
import RootPath from "../router/RootPath";

const RootBreadcrumbs = () =>
	<Breadcrumb>
		<Breadcrumb.Item key={RootPath.root}>
			<Link to={RootPath.root}/>
			<HomeOutlined/>
		</Breadcrumb.Item>
	</Breadcrumb>
;

export default RootBreadcrumbs;
