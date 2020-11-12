import CommonCreateView from "site/common/view/CommonCreateView";
import KingdomView from "site/game/module/kingdom/view/KingdomView";

const CreateView = () => {
	return (
		<KingdomView>
			<CommonCreateView
				defaultEnableSubmit={true}
			/>
		</KingdomView>
	);
};

export default CreateView;
