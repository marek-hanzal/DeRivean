import {Avatar, Button, Divider, List, Space} from "antd";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import TranslationContext from "site/root/module/translation/component/TranslationContext";

const TranslationListItem = ({item, context}) => {
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={context.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(context.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<TranslationIcon/>}/>
				}
				title={<Link to={context.link.edit.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<div>{t(context.id + ".list.language")} <strong>{item.language}</strong></div>
						<div>{t(context.id + ".list.label")} <strong>{item.label}</strong></div>
					</Space>
				}
			/>
		</List.Item>
	);
};

const TranslationList = () => {
	const context = useContext(TranslationContext);
	return (
		<BaseTable
			onFetchPage={context.page}
			children={item => <TranslationListItem context={context} item={item} key={item.id}/>}
		/>
	);
};

export default TranslationList;
