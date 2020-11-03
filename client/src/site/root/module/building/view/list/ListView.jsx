import BaseListView from "component/view/BaseListView";
import BuildingList from "site/root/module/building/component/BuildingList";
import {BuildingContext, BuildingView} from "site/root/module/building/view/BuildingView";

const ListView = () => {
	return (
		<BuildingView>
			<BaseListView
				context={BuildingContext}
			>
				<BuildingList/>
			</BaseListView>
		</BuildingView>
	);
};

export default ListView;
