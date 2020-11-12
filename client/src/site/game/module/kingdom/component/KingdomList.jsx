import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import BuildingIcon from "site/common/icon/BuildingIcon";
import HeroIcon from "site/common/icon/HeroIcon";
import KingdomIcon from "site/common/icon/KingdomIcon";
import Routes from "site/Routes";

const KingdomListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={moduleContext.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(moduleContext.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<KingdomIcon/>}/>
				}
				title={<Link to={moduleContext.link.home.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={moduleContext.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(moduleContext.id + ".list.edit-attributes")}</Button></Link>
						<Link to={Routes.game.hero.create.link(item.id)}><Button icon={<HeroIcon/>} type={"link"} size={"small"}>{t(moduleContext.id + ".list.create-hero")}</Button></Link>
						<Link to={Routes.game.building.create.link(item.id)}><Button icon={<BuildingIcon/>} type={"link"} size={"small"}>{t(moduleContext.id + ".list.create-building")}</Button></Link>
					</Space>
				}
			/>
			<Space split={<Divider type={"vertical"}/>}>
				<Link to={Routes.game.hero.list.link(item.id)}><Button type={"dashed"} icon={<HeroIcon/>}>&nbsp;{item.stats.heroes}</Button></Link>
				<Link to={Routes.game.building.list.link(item.id)}><Button type={"dashed"} icon={<BuildingIcon/>}>&nbsp;{item.stats.buildings}</Button></Link>
			</Space>
		</List.Item>
	);
};

const KingdomList = () => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <KingdomListItem item={item} key={item.id}/>}
		/>
	);
};

export default KingdomList;
