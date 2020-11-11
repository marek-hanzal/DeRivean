import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";

const BuildingListItem = ({item, context}) => {
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={context.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(context.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<BuildingIcon/>}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={context.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(context.id + ".list.edit-attributes")}</Button></Link>
					</Space>
				}
				title={<Link to={context.link.home.link(item.id)}>{item.name}</Link>}
			/>
		</List.Item>
	);
};

const BuildingList = () => {
	const context = useContext(BuildingContext);
	return (
		<BaseTable
			onFetchPage={context.page}
			children={item => <BuildingListItem context={context} item={item} key={item.id}/>}
		/>
	);
};

export default BuildingList;
