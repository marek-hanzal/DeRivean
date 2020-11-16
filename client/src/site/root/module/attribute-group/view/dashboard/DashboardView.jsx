import BaseDashboardView from "component/view/BaseDashboardView";
import AttributeGroupView from "site/root/module/attribute-group/view/AttributeGroupView";

const DashboardView = () => {
	return (
		<AttributeGroupView>
			<BaseDashboardView>
				{/*<OverallStatistics exclude={["translations"]}/>*/}
			</BaseDashboardView>
		</AttributeGroupView>
	);
};

export default DashboardView;
