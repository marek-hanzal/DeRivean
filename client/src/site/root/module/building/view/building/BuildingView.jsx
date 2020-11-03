import {BaseBuildingView, BuildingContext} from "site/root/module/building/view/BaseBuildingView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const BuildingView = () => {
	return (
		<BaseBuildingView>
			<EditViewWithAttributes
				context={BuildingContext}
				formName={"building"}
				param={"building"}
				open={[]}
				enableSubmit={true}
			/>
		</BaseBuildingView>
	);
};

export default BuildingView;
