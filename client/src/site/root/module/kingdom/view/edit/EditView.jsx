import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<KingdomView>
			<CommonEditView
				context={KingdomContext}
				defaultEnableSubmit={true}
			/>
		</KingdomView>
	);
};

export default EditView;
