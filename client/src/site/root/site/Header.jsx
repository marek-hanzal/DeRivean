import {Avatar, Button, Divider, Layout, message, Space} from "antd";
import icon from "assets/icon.png";
import SearchInput from "component/form/SearchInput";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import copy from "copy-to-clipboard";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import BuildingIcon from "site/common/icon/BuildingIcon";
import HeroIcon from "site/common/icon/HeroIcon";
import KingdomIcon from "site/common/icon/KingdomIcon";
import ModuleIcon from "site/common/icon/ModuleIcon";
import {doSearch} from "site/root/action/action";
import Routes from "site/Routes";

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
				<ModuleContext.Provider value={{search: doSearch, id: "root.header"}}>
					<SearchInput
						listHeight={368}
						showArrow={false}
						size={"large"}
						bordered={false}
						style={{width: "100%"}}
						placeholder={"search"}
						value={value}
						onSelect={(_, node) => {
							setValue(null);
						}}
						render={item => <SearchItem item={item}/>}
						hotkey={"alt+x"}
					/>
				</ModuleContext.Provider>
			</div>
		</Layout.Header>
	);
};

export default Header;
