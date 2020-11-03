import BaseListView from "component/view/BaseListView";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomList from "site/root/module/kingdom/component/KingdomList";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const ListView = () => {
	return (
		<KingdomView>
			<BaseListView context={KingdomContext}>
				<KingdomList/>
			</BaseListView>
		</KingdomView>
	);
};

export default ListView;
