import {Avatar, Button, Divider, List, Space, Tooltip} from "antd";
import EditIcon from "component/icon/EditIcon";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import UserContext from "site/root/module/user/component/UserContext";
import Routes from "site/Routes";

const UserListItem = ({item}) => {
	const {t} = useTranslation();
	const context = useContext(UserContext);
	return (
		<List.Item actions={[<Button type={"primary"} ghost icon={<EditIcon/>} size={"large"} children={<Link to={context.link.edit.link(item.id)}>{t(context.id + ".list.edit")}</Link>}/>]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<UserIcon/>}/>
				}
				title={<Link to={context.link.home.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<div>{t(context.id + ".list.login")} <strong>{item.login}</strong></div>
						<div>{t(context.id + ".list.token")} <strong>{item.token || t(context.id + ".list.empty-token")}</strong></div>
					</Space>
				}
			/>
			<Space split={<Divider type={"vertical"}/>}>
				<Tooltip title={t(context.id + ".list.kingdom-hint")}>
					<Button type={"dashed"} icon={<KingdomIcon/>} children={<Link to={Routes.root.kingdom.list.link(item.id)}>&nbsp;{item.stats.kingdoms}</Link>}/>
				</Tooltip>
			</Space>
		</List.Item>
	);
};

const UserList = () => {
	const context = useContext(UserContext);
	return (
		<BaseTable
			id={`${context.id}.list.table`}
			redux={context.redux}
		>
			{item => <UserListItem item={item} key={item.id}/>}
		</BaseTable>
	);
};

export default UserList;
