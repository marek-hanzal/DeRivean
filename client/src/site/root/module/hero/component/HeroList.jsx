import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {fetchHeroPage} from "redux/hero/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";

const HeroListItem = ({item, context}) => {
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={context.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(context.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<HeroIcon/>}/>
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

const HeroList = () => {
	const context = useContext(HeroContext);
	return (
		<BaseTable
			onFetchPage={fetchHeroPage}
			children={item => <HeroListItem context={context} item={item} key={item.id}/>}
		/>
	);
};

export default HeroList;
