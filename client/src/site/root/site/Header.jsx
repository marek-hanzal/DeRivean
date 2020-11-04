import {Avatar, Button, Divider, Layout, message, Space} from "antd";
import icon from "assets/icon.png";
import SearchInput from "component/form/SearchInput";
import copy from "copy-to-clipboard";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import {SearchRedux} from "redux/search/redux";
import ModuleIcon from "site/root/component/ModuleIcon";
import Routes from "site/Routes";

const HeaderContext = React.createContext({
	id: "root.header",
	redux: SearchRedux,
});

function warpTo(navigate, item, target = "home") {
	navigate(Routes.root[item.type][target].link(item.id));
}

const SearchItem = ({item}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	return (
		<Space split={<Divider type={"vertical"}/>}>
			<ModuleIcon module={item.type}/>
			<Button type={"primary"} ghost size={"small"} onClick={() => {
				warpTo(navigate, item);
				message.success(t("common.warped"));
			}} children={t("common.view-item")}/>
			<Button type={"dashed"} size={"small"} onClick={() => {
				warpTo(navigate, item, "edit");
				message.success(t("common.warped"));
			}} children={t("common.edit-item")}/>
			<Button type={"dashed"} size={"small"} onClick={e => {
				copy(item.id, {
					format: "text/plain",
					onCopy: () => message.success(t("common.copy-success")),
				});
			}} children={t("common.copy-id")}/>
			{item.name}
		</Space>
	);
};

const Header = () => {
	const [value, setValue] = useState();
	return (
		<Layout.Header style={{
			position: "fixed",
			zIndex: 1009,
			width: "100%",
			padding: 0,
			backgroundColor: "#FFF",
		}}>
			<div style={{float: "left"}}>
				<Link to={Routes.root.link()}>
					<Button type={"link"} size={"large"} icon={<Avatar style={{marginRight: "1em"}} size={"large"} src={icon}/>}>
						DeRivean
					</Button>
				</Link>
			</div>
			<div style={{width: "50%", margin: "0 auto"}}>
				<SearchInput
					size={"large"}
					bordered={false}
					style={{width: "100%"}}
					context={HeaderContext}
					placeholder={"search"}
					value={value}
					onSelect={(_, node) => {
						setValue(null);
					}}
					render={item => <SearchItem item={item}/>}
				/>
			</div>
		</Layout.Header>
	);
};

export default Header;
