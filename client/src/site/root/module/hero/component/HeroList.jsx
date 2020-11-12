import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";

const HeroListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={moduleContext.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(moduleContext.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<HeroIcon/>}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={moduleContext.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(moduleContext.id + ".list.edit-attributes")}</Button></Link>
					</Space>
				}
				title={<Link to={moduleContext.link.home.link(item.id)}>{item.name}</Link>}
			/>
		</List.Item>
	);
};

const HeroList = () => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <HeroListItem item={item} key={item.id}/>}
		/>
	);
};

export default HeroList;
