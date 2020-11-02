import BaseListView from "component/view/BaseListView";
import KingdomList from "site/root/module/kingdom/component/KingdomList";
import RootView from "site/root/view/RootView";

const ListView = () => {
	return (
		<BaseListView
			base={RootView}
			id={"root.kingdom"}
		>
			<KingdomList/>
		</BaseListView>
	);
};

export default ListView;
