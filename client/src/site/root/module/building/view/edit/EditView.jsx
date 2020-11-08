import {useBuildingFetch} from "redux/building/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{() => (
					<CommonEditView
						context={BuildingContext}
						fetch={useBuildingFetch}
						formName={"building"}
						param={"building"}
						defaultEnableSubmit={true}
					/>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default EditView;
