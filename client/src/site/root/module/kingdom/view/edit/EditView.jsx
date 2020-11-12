import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonEditView from "site/root/view/common/CommonEditView";

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
