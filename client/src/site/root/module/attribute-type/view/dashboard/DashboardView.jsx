import BaseDashboardView from "component/view/BaseDashboardView";
import AttributeTypeView from "site/root/module/attribute-type/view/AttributeTypeView";

const DashboardView = () => {
	return (
		<AttributeTypeView>
			<BaseDashboardView>
				{/*<OverallStatistics exclude={["translations"]}/>*/}
			</BaseDashboardView>
		</AttributeTypeView>
	);
};

export default DashboardView;
