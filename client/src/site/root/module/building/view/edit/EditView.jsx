import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const EditView = () => {
	return (
		<BuildingView>
			<EditViewWithAttributes
				context={BuildingContext}
				formName={"building"}
				param={"building"}
				enableSubmit={true}
			/>
		</BuildingView>
	);
};

export default EditView;
