import BaseListView from "component/view/BaseListView";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingList from "site/root/module/building/component/BuildingList";
import BuildingView from "site/root/module/building/view/BuildingView";

const ListView = () => {
	return (
		<BuildingView>
			<BaseListView context={BuildingContext}>
				<BuildingList/>
			</BaseListView>
		</BuildingView>
	);
};

export default ListView;
