import {Avatar, Divider, List, Space} from "antd";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import AttributeGroupItems from "site/common/attribute/AttributeGroupItems";
import KingdomIcon from "site/common/icon/KingdomIcon";

const KingdomListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	return (
		<List.Item>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<KingdomIcon/>}/>
				}
				title={<Link to={moduleContext.link.home.link(item.id)}>{item.name}</Link>}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<AttributeGroupItems attributes={item.attributes} group={"resource"}/>
					</Space>
				}
			/>
			<Space split={<Divider type={"vertical"}/>}>
			</Space>
		</List.Item>
	);
};

const KingdomList = () => {
	const moduleContext = useContext(ModuleContext);
	return (
		<BaseTable
			onFetchPage={moduleContext.page}
			children={item => <KingdomListItem item={item} key={item.id}/>}
		/>
	);
};

export default KingdomList;
