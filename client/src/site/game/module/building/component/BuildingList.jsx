import {Avatar, Divider, List, Result, Space} from "antd";
import ModuleContext from "component/ModuleContext";
import BaseTable from "component/table/BaseTable";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import AttributeGroupItems from "site/common/attribute/AttributeGroupItems";
import BuildTime from "site/common/building/BuildTime";
import IsBuiltIcon from "site/common/building/IsBuiltIcon";
import BuildingIcon from "site/common/icon/BuildingIcon";
import BuildButton from "site/game/module/building/component/BuildButton";

const BuildingListItem = ({item}) => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<List.Item actions={[
			<IsBuiltIcon isBuilt={item.isBuilt}/>,
			<BuildButton building={item}/>
		]}>
			<List.Item.Meta
				avatar={
					<Avatar style={{color: "#1890ff", backgroundColor: "#FFF"}} size={"large"} icon={<BuildingIcon/>}/>
				}
				description={
					<Space split={<Divider type={"vertical"}/>}>
						<AttributeGroupItems group={"cost"} attributes={item.attributes}/>
						{item.isBuilt ? <AttributeGroupItems group={"production"} attributes={item.attributes}/> : null}
						{item.description ? t("building." + item.description) : null}
					</Space>
				}
				title={
					<Space split={<Divider type={"vertical"}/>}>
						<Link to={moduleContext.link.home.link(item.id)}>{t("building." + item.name)}</Link>
						<BuildTime building={item}/>
					</Space>
				}
			/>
		</List.Item>
	);
};

const BuildingList = () => {
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	return (
		<>
			<BaseTable
				onFetchPage={moduleContext.page}
				children={item => <BuildingListItem item={item} key={item.id}/>}
				footer={
					<Result
						status={"success"}
						title={t(moduleContext.id + ".list.discover-more.title")}
						subTitle={t(moduleContext.id + ".list.discover-more.sub-title")}
					/>
				}
			/>
		</>
	);
};

export default BuildingList;
