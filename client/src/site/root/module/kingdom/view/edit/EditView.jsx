import CommonEditView from "site/common/view/CommonEditView";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const EditView = () => {
	return (
		<KingdomView>
			<CommonEditView
				defaultEnableSubmit={true}
			/>
		</KingdomView>
	);
};

export default EditView;
