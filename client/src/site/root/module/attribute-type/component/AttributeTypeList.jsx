import {Avatar, Button, Divider, List, Space} from "antd";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const AttributeTypeListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={moduleContext.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(moduleContext.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={moduleContext.icon}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						{t("attribute-type." + item.description)}
					</Space>
				}
				title={<Link to={moduleContext.link.home.link(item.id)}>{t("attribute." + item.name)}</Link>}
			/>
		</List.Item>
	);
};

const AttributeTypeList = (props) => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <AttributeTypeListItem item={item} key={item.id}/>}
			{...props}
		/>
	);
};

export default AttributeTypeList;
