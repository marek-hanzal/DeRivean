import DeferredInput from "component/form/DeferredInput";
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
			title={<DeferredInput label={"root.kingdomContext.dashboard.view.name"} item={kingdom} name={"name"}/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
