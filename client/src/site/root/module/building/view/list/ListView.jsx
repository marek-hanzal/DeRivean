import BaseListView from "component/view/BaseListView";
import BuildingList from "site/root/module/building/component/BuildingList";
import {BaseBuildingView, BuildingContext} from "site/root/module/building/view/BaseBuildingView";

const ListView = () => {
	return (
		<BaseBuildingView>
			<BaseListView
				context={BuildingContext}
				menu={"root.building.list"}
			>
				<BuildingList/>
			</BaseListView>
		</BaseBuildingView>
	);
};

export default ListView;
