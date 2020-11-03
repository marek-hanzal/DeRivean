import BaseListView from "component/view/BaseListView";
import KingdomList from "site/root/module/kingdom/component/KingdomList";
import {BaseKingdomView, KingdomContext} from "site/root/module/kingdom/view/BaseKingdomView";

const ListView = () => {
	return (
		<BaseKingdomView>
			<BaseListView
				context={KingdomContext}
			>
				<KingdomList/>
			</BaseListView>
		</BaseKingdomView>
	);
};

export default ListView;
