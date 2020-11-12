import BaseListView from "component/view/BaseListView";
import BuildingList from "site/root/module/building/component/BuildingList";
import BuildingView from "site/root/module/building/view/BuildingView";

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
