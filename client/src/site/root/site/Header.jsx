import {QuestionCircleOutlined} from "@ant-design/icons";
import {Avatar, Button, Divider, Layout, message, Space} from "antd";
import icon from "assets/icon.png";
import SearchInput from "component/form/SearchInput";
import copy from "copy-to-clipboard";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import {SearchRedux} from "redux/search/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";

const HeaderContext = React.createContext({
	id: "root.header",
	redux: SearchRedux,
});

const icons = {
	user: <UserIcon/>,
	kingdom: <KingdomIcon/>,
};

function warpTo(navigate, item) {
	navigate(Routes.root[item.type].home.link(item.id));
}

const SearchItem = ({item}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	return (
		<Space split={<Divider type={"vertical"}/>}>
			{icons[item.type] || <QuestionCircleOutlined/>}
			<Button type={"primary"} ghost size={"small"} onClick={() => {
				warpTo(navigate, item);
				message.success(t("common.warped"));
			}}>{t("common.view-item")}</Button>
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
	const navigate = useNavigate();
	const [value, setValue] = useState();
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
					value={value}
					onSelect={(_, node) => {
						setValue(null);
						// warpTo(navigate, node.item);
					}}
					render={item => <SearchItem item={item}/>}
				/>
			</div>
		</Layout.Header>
	);
};

export default Header;
