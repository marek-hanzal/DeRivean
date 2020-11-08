import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {fetchKingdomPage} from "redux/kingdom/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import Routes from "site/Routes";

const KingdomListItem = ({item, context}) => {
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={context.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(context.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<KingdomIcon/>}/>
				}
				title={<Link to={context.link.home.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={context.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(context.id + ".list.edit-attributes")}</Button></Link>
						<Link to={Routes.root.hero.create.link(item.id)}><Button icon={<HeroIcon/>} type={"link"} size={"small"}>{t(context.id + ".list.create-hero")}</Button></Link>
						<Link to={Routes.root.building.create.link(item.id)}><Button icon={<BuildingIcon/>} type={"link"} size={"small"}>{t(context.id + ".list.create-building")}</Button></Link>
					</Space>
				}
			/>
			<Space split={<Divider type={"vertical"}/>}>
				<Link to={Routes.root.hero.list.link(item.id)}><Button type={"dashed"} icon={<HeroIcon/>}>&nbsp;{item.stats.heroes}</Button></Link>
				<Link to={Routes.root.building.list.link(item.id)}><Button type={"dashed"} icon={<BuildingIcon/>}>&nbsp;{item.stats.buildings}</Button></Link>
			</Space>
		</List.Item>
	);
};

const KingdomList = () => {
	const context = useContext(KingdomContext);
	return (
		<BaseTable
			onFetchPage={fetchKingdomPage}
			param={"user"}
			children={item => <KingdomListItem context={context} item={item} key={item.id}/>}
		/>
	);
};

export default KingdomList;
