import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import BuildingIcon from "site/common/icon/BuildingIcon";

const BuildingListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();

	const cost = item => item.attributes.filter(item => item.type.group.name === "cost");

	return (
		<List.Item actions={[
			<Link to={moduleContext.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(moduleContext.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<BuildingIcon/>}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={moduleContext.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(moduleContext.id + ".list.edit-attributes")}</Button></Link>
						<strong>{t("attribute-group.cost")}</strong>
						{cost(item).map(attribute => (
							<span key={attribute.type.name}><strong>{t("attribute." + attribute.type.name)}:</strong>&nbsp;{attribute.value}</span>
						))}
					</Space>
				}
				title={<Link to={moduleContext.link.home.link(item.id)}>{item.name}</Link>}
			/>
		</List.Item>
	);
};

const BuildingList = () => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <BuildingListItem item={item} key={item.id}/>}
		/>
	);
};

export default BuildingList;
