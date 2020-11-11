import {Avatar, Button, Divider, Layout, message, Space} from "antd";
import icon from "assets/icon.png";
import SearchInput from "component/form/SearchInput";
import EditIcon from "component/icon/EditIcon";
import copy from "copy-to-clipboard";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import {doSearch} from "site/root/action/action";
import ModuleIcon from "site/root/component/ModuleIcon";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import Routes from "site/Routes";

const HeaderContext = React.createContext({
	id: "root.header",
	search: doSearch,
});

function warpTo(navigate, item, target = "home") {
	navigate(Routes.root[item.type][target].link(item.id));
}

const UserToolbar = ({item}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	return (
		<Space split={<Divider type={"vertical"}/>}>
			<Button size={"small"} type={"dashed"} icon={<KingdomIcon/>} onClick={() => {
				navigate(Routes.root.kingdom.create.link(item.id));
			}}>{t("root.toolbar.kingdom.create")}</Button>
			<Button size={"small"} type={"dashed"} icon={<KingdomIcon/>} onClick={() => {
				navigate(Routes.root.kingdom.list.link(item.id));
			}}>{t("root.toolbar.kingdom.list")}</Button>
		</Space>
	);
};

const KingdomToolbar = ({item}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	return (
		<Space split={<Divider type={"vertical"}/>}>
			<Button size={"small"} type={"dashed"} icon={<BuildingIcon/>} onClick={() => {
				navigate(Routes.root.building.create.link(item.id));
			}}>{t("root.toolbar.building.create")}</Button>
			<Button size={"small"} type={"dashed"} icon={<BuildingIcon/>} onClick={() => {
				navigate(Routes.root.building.list.link(item.id));
			}}>{t("root.toolbar.building.list")}</Button>
			<Button size={"small"} type={"dashed"} icon={<HeroIcon/>} onClick={() => {
				navigate(Routes.root.hero.create.link(item.id));
			}}>{t("root.toolbar.hero.create")}</Button>
			<Button size={"small"} type={"dashed"} icon={<HeroIcon/>} onClick={() => {
				navigate(Routes.root.hero.list.link(item.id));
			}}>{t("root.toolbar.hero.list")}</Button>
		</Space>
	);
};

const CustomToolbar = ({item}) => {
	switch (item.type) {
		case "user":
			return <UserToolbar item={item}/>;
		case "kingdom":
			return <KingdomToolbar item={item}/>;
		default:
			return null;
	}
};

const SearchItem = ({item}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	return (
		<Space split={<Divider type={"vertical"}/>} size={"small"}>
			<Button size={"small"} type={"dashed"} icon={<ModuleIcon module={item.type}/>} onClick={() => {
				warpTo(navigate, item);
				message.success(t("common.warped"));
			}} children={t("common.view-item")}/>
			<Button size={"small"} type={"dashed"} icon={<EditIcon/>} onClick={() => {
				warpTo(navigate, item, "edit");
				message.success(t("common.warped"));
			}} children={t("common.edit-item")}/>
			<Button size={"small"} type={"dashed"} onClick={e => {
				copy(item.id, {
					format: "text/plain",
					onCopy: () => message.success(t("common.copy-success")),
				});
			}} children={t("common.copy-id")}/>
			<CustomToolbar item={item}/>
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
			<div style={{
				width: "70%",
				margin: "0 auto"
			}}>
				<SearchInput
					listHeight={368}
					showArrow={false}
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
					hotkey={"alt+x"}
				/>
			</div>
		</Layout.Header>
	);
};

export default Header;
