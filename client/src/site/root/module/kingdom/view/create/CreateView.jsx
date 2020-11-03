import {BaseKingdomView, KingdomContext} from "site/root/module/kingdom/view/BaseKingdomView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<BaseKingdomView>
			<CreateViewWithAttributes
				context={KingdomContext}
				formName={"kingdom"}
				param={"user"}
				enableSubmit={true}
			/>
		</BaseKingdomView>
	);
};

export default CreateView;
