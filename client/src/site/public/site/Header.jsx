import {link} from "@leight-core/leight";
import {Avatar, Button, Layout} from "antd";
import {Link} from "react-router-dom";
import icon from "../../../assets/icon.png";

const Header = () =>
	<Layout.Header style={{
		position: "fixed",
		zIndex: 1,
		width: "100%",
		padding: 0,
		backgroundColor: "#FFF",
	}}>
		<div style={{float: "left"}}>
			<Link to={link("public.home")}>
				<Button type={"link"} size={"large"} icon={<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>}>
					DeRivean
				</Button>
			</Link>
		</div>
	</Layout.Header>
;

export default Header;
