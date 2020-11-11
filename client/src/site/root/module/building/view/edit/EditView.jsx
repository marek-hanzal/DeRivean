import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<BuildingView>
			<CommonEditView
				context={BuildingContext}
				defaultEnableSubmit={true}
			/>
		</BuildingView>
	);
};

export default EditView;
