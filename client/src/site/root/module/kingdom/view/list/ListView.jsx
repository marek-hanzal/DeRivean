import BaseListView from "component/view/BaseListView";
import KingdomList from "site/root/module/kingdom/component/KingdomList";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const ListView = () => {
	return (
		<BaseListView
			base={KingdomView}
			id={"root.kingdom"}
		>
			<KingdomList/>
		</BaseListView>
	);
};

export default ListView;
