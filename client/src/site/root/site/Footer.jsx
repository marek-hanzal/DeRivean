import { Layout } from "antd";
import React from "react";

const Footer = () =>
	<Layout.Footer style={{textAlign: "center"}}>
		v[{process.env.REACT_APP_VERSION}]
	</Layout.Footer>
;

export default Footer;
