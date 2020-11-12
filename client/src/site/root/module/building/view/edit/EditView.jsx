import CommonEditView from "site/common/view/CommonEditView";
import BuildingView from "site/root/module/building/view/BuildingView";

const EditView = () => {
	return (
		<BuildingView>
			<CommonEditView
				defaultEnableSubmit={true}
			/>
		</BuildingView>
	);
};

export default EditView;
