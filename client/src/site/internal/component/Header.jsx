import {Avatar, Layout} from "antd";
import Menu from "antd/lib/menu";
import icon from "assets/icon.png";
import React from "react";
import {Link} from "react-router-dom";
import InternalPath from "site/internal/router/InternalPath";

const Header = () =>
	<Layout.Header style={{position: "fixed", zIndex: 1, width: "100%", padding: "0"}}>
		<Menu theme="dark" mode="horizontal" selectable={false}>
			<Menu.Item key="derivean" icon={<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>}><Link to={InternalPath.root}>DeRivean</Link></Menu.Item>
		</Menu>
	</Layout.Header>
;

export default Header;
