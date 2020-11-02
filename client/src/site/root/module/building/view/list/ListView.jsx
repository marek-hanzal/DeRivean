import BaseListView from "component/view/BaseListView";
import BuildingList from "site/root/module/building/component/BuildingList";
import RootView from "site/root/view/RootView";

const ListView = () => {
	return (
		<BaseListView
			base={RootView}
			id={"root.building"}
			menu={"root.building.list"}
		>
			<BuildingList/>
		</BaseListView>
	);
};

export default ListView;
