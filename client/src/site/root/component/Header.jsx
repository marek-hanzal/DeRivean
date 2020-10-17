import React from 'react';
import Menu from "antd/lib/menu";
import {Avatar, Layout} from "antd";
import icon from "../../../assets/icon.png";
import {Link} from "react-router-dom";
import RootPath from "../router/RootPath";

const Header = () =>
	<Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%', padding: '0'}}>
		<Menu theme="dark" mode="horizontal" selectable={false}>
			<Menu.Item key="derivean" icon={<Avatar style={{marginRight: '1em'}} size={"large"} src={icon}/>}><Link to={RootPath.root}>DeRivean</Link></Menu.Item>
		</Menu>
	</Layout.Header>
;

export default Header;
