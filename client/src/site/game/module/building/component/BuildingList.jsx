import {Avatar, Divider, List, Space} from "antd";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {Link} from "react-router-dom";
import AttributeGroupItems from "site/common/attribute/AttributeGroupItems";
import IsBuiltIcon from "site/common/building/IsBuiltIcon";
import BuildingIcon from "site/common/icon/BuildingIcon";

const BuildingListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	return (
		<List.Item actions={[
			<IsBuiltIcon isBuilt={item.isBuilt}/>,
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<BuildingIcon/>}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<AttributeGroupItems group={"cost"} attributes={item.attributes}/>
						{item.isBuilt ? <AttributeGroupItems group={"production"} attributes={item.attributes}/> : null}
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
