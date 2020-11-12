import BaseListView from "component/view/BaseListView";
import KingdomList from "site/game/module/kingdom/component/KingdomList";
import KingdomView from "site/game/module/kingdom/view/KingdomView";

const ListView = () => {
	return (
		<KingdomView>
			<BaseListView>
				<KingdomList/>
			</BaseListView>
		</KingdomView>
	);
};

export default ListView;
