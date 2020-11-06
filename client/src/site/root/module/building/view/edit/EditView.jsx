import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{({id, redux}) => (
					<CommonEditView
						context={BuildingContext}
						formName={"building"}
						param={"building"}
						defaultEnableSubmit={true}
						readyCount={1}
						children={<AttributeFieldEditor translation={id} redux={redux}/>}
					/>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default EditView;
