import {HomeOutlined} from "@ant-design/icons";
import Breadcrumb from "antd/lib/breadcrumb";
import React from "react";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import InternalPath from "site/internal/router/InternalPath";

const InternalBreadcrumbs = () =>
	<>
		<Route exact path={InternalPath.root} render={() => (<Breadcrumb>
			<Breadcrumb.Item key={InternalPath.root}>
				<Link to={InternalPath.root}><HomeOutlined/></Link>
			</Breadcrumb.Item>
		</Breadcrumb>)}/>
	</>
;

export default InternalBreadcrumbs;
