import {KingdomContext, KingdomView} from "site/root/module/kingdom/view/KingdomView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<KingdomView>
			<CreateViewWithAttributes
				context={KingdomContext}
				param={"user"}
				enableSubmit={true}
			/>
		</KingdomView>
	);
};

export default CreateView;
