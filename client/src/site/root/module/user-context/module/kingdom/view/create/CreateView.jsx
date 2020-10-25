import BaseCreateView from "component/view/BaseCreateView";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";

const CreateView = () => {
	return (
		<BaseCreateView
			base={KingdomView}
			id={"root.userContext.kingdom"}
		/>
	);
};

export default CreateView;
