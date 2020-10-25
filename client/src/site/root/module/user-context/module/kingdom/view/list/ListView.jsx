import BaseListView from "component/view/BaseListView";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import defaultPage from "utils/page";

const ListView = () => {
	return (
		<BaseListView
			base={KingdomView}
			id={"root.userContext.kingdom"}
			page={defaultPage}
			onPage={() => {
			}}
		/>
	);
};

export default ListView;
