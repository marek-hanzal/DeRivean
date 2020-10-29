import {LoadingOutlined} from "@ant-design/icons";
import {Input} from "antd";
import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import useKingdomSelector from "site/root/module/kingdom/hook/useKingdomSelector";

const DashboardView = () => {
	const kingdom = useKingdomSelector();
	return (
		<BaseDashboardView
			base={KingdomContextView}
			id={"root.kingdomContext"}
			open={["root.kingdomContext.hero", "root.kingdomContext.building"]}
			icon={<KingdomContextIcon/>}
			title={<Input addonBefore={"[Kingdom Name]"} value={kingdom ? kingdom.name : null} disabled suffix={kingdom ? null : <LoadingOutlined/>}/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
