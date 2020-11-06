import {Layout} from "antd";

const Footer = () =>
	<Layout.Footer style={{textAlign: "center"}}>
		v[{process.env.REACT_APP_VERSION}@{process.env.REACT_APP_HASH}]
	</Layout.Footer>
;

export default Footer;
