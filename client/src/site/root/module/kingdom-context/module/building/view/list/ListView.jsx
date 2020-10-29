import BaseListView from "component/view/BaseListView";
import BuildingView from "site/root/module/kingdom-context/module/building/view/BuildingView";
import defaultPage from "utils/page";

const ListView = () => {
	return (
		<BaseListView
			base={BuildingView}
			id={"root.kingdomContext.building"}
			page={defaultPage}
			onPage={() => ({})}
			items={[]}
		/>
	);
};

export default ListView;
