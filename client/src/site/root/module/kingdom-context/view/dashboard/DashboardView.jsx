import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";

const DashboardView = () => {
	// const kingdom = useSelector(KingdomFetchRedux.selector.getPayload);
	return (
		<BaseDashboardView
			base={KingdomContextView}
			id={"root.kingdomContext"}
			// icon={}
			title={".... CREATE KINGDOM COMPONENTS ..."}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
