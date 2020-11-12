import {Avatar, Button, Divider, List, Space} from "antd";
import EditIcon from "component/icon/EditIcon";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";

const TranslationListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={moduleContext.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(moduleContext.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<TranslationIcon/>}/>
				}
				title={<Link to={moduleContext.link.edit.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<div>{t(moduleContext.id + ".list.language")} <strong>{item.language}</strong></div>
						<div>{t(moduleContext.id + ".list.label")} <strong>{item.label}</strong></div>
					</Space>
				}
			/>
		</List.Item>
	);
};

const TranslationList = () => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <TranslationListItem item={item} key={item.id}/>}
		/>
	);
};

export default TranslationList;
