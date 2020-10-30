import BaseListView from "component/view/BaseListView";
import BuildingView from "site/root/module/building/view/BuildingView";
import defaultPage from "utils/page";

const ListView = () => {
	return (
		<BaseListView
			base={BuildingView}
			id={"root.building"}
			page={defaultPage}
			onPage={() => ({})}
			items={[]}
		/>
	);
};

export default ListView;
