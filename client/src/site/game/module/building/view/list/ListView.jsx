import BaseListView from "component/view/BaseListView";
import BuildingList from "site/game/module/building/component/BuildingList";
import BuildingView from "site/game/module/building/view/BuildingView";

const ListView = () => {
	return (
		<BuildingView>
			<BaseListView>
				<BuildingList/>
			</BaseListView>
		</BuildingView>
	);
};

export default ListView;
