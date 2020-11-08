import {Avatar, Button, Divider, List, Space} from "antd";
import AttributeIcon from "component/icon/AttributeIcon";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import UserContext from "site/root/module/user/component/UserContext";
import Routes from "site/Routes";

const UserListItem = ({item, context}) => {
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<Link to={context.link.edit.link(item.id)}><Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={t(context.id + ".list.edit")}/></Link>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<UserIcon/>}/>
				}
				title={<Link to={context.link.home.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={context.link.attributes.link(item.id)}><Button type={"link"} size={"small"} icon={<AttributeIcon/>}>{t(context.id + ".list.edit-attributes")}</Button></Link>
						<Link to={Routes.root.kingdom.create.link(item.id)}><Button icon={<KingdomIcon/>} type={"link"} size={"small"}>{t(context.id + ".list.create-kingdom")}</Button></Link>
						<div>{t(context.id + ".list.login")} <strong>{item.login}</strong></div>
						<div>{t(context.id + ".list.site")} <strong>{item.site || t(context.id + ".list.no-site")}</strong></div>
						<div>{t(context.id + ".list.ticket")} <strong>{item.ticket || t(context.id + ".list.empty-token")}</strong></div>
					</Space>
				}
			/>
			<Space split={<Divider type={"vertical"}/>}>
				<Link to={Routes.root.kingdom.list.link(item.id)}><Button type={"dashed"} icon={<KingdomIcon/>}>&nbsp;{item.stats.kingdoms}</Button></Link>
			</Space>
		</List.Item>
	);
};

const UserList = () => {
	const context = useContext(UserContext);
	return (
		<BaseTable
			redux={context.redux}
			children={item => <UserListItem context={context} item={item} key={item.id}/>}
		/>
	);
};

export default UserList;
