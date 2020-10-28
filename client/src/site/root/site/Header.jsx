import {Avatar, Layout} from "antd";
import Menu from "antd/lib/menu";
import icon from "assets/icon.png";
import {Link} from "react-router-dom";
import Routes from "site/Routes";

const Header = () =>
	<Layout.Header style={{
		position: "fixed",
		zIndex: 100,
		width: "100%",
		padding: 0,
	}}>
		<Menu theme="dark" mode="horizontal" selectable={false}>
			<Menu.Item key="derivean" icon={<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>}><Link to={Routes.root.link()}>DeRivean</Link></Menu.Item>
		</Menu>
	</Layout.Header>
;

export default Header;
