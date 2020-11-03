import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
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
