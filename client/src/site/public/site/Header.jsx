import {Avatar, Button, Layout} from "antd";
import icon from "assets/icon.png";
import {Link} from "react-router-dom";
import Routes from "site/Routes";

const Header = () =>
	<Layout.Header style={{
		position: "fixed",
		zIndex: 1,
		width: "100%",
		padding: 0,
		backgroundColor: "#FFF",
	}}>
		<div style={{float: "left"}}>
			<Link to={Routes.public.link()}>
				<Button type={"link"} size={"large"} icon={<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>}>
					DeRivean
				</Button>
			</Link>
		</div>
	</Layout.Header>
;

export default Header;
