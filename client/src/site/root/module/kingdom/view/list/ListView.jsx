import BaseListView from "component/view/BaseListView";
import KingdomList from "site/root/module/kingdom/component/KingdomList";
import {KingdomContext, KingdomView} from "site/root/module/kingdom/view/KingdomView";

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
