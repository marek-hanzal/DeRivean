import {Avatar, Layout} from "antd";
import icon from "assets/icon.png";
import SearchInput from "component/form/SearchInput";
import React from "react";
import {Link} from "react-router-dom";
import {SearchRedux} from "redux/search/redux";
import Routes from "site/Routes";

const HeaderContext = React.createContext({
	id: "root.header",
	redux: SearchRedux,
});

const Header = () => {
	return (
		<Layout.Header style={{
			position: "fixed",
			zIndex: 1009,
			width: "100%",
			padding: 0,
			backgroundColor: "#FFF",
		}}>
			<div style={{float: "left", margin: "0 2.2em 0 1em"}}>
				<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>
				<Link to={Routes.root.link()}>DeRivean</Link>
			</div>
			<div style={{width: "50%", margin: "0 auto"}}>
				<SearchInput
					size={"large"}
					bordered={false}
					style={{width: "100%"}}
					context={HeaderContext}
					placeholder={"search"}
					onSelect={(_, option) => {
						console.log("selected", option);
					}}
				/>
			</div>
		</Layout.Header>
	);
};

export default Header;
