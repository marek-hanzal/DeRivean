import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{({id, redux}) => (
					<CommonEditView
						context={KingdomContext}
						param={"kingdom"}
						defaultEnableSubmit={true}
						readyCount={1}
						children={<AttributeFieldEditor translation={id} redux={redux}/>}
					/>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default EditView;
