import BaseDashboardView from "component/view/BaseDashboardView";
import AttributeView from "site/root/module/attribute/view/AttributeView";

const DashboardView = () => {
	return (
		<AttributeView>
			<BaseDashboardView>
				{/*<OverallStatistics exclude={["translations"]}/>*/}
			</BaseDashboardView>
		</AttributeView>
	);
};

export default DashboardView;
