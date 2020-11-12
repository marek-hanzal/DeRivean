import BuildingView from "site/root/module/building/view/BuildingView";
import CommonEditView from "site/root/view/common/CommonEditView";

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
