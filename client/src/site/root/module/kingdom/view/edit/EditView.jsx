import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const EditView = () => {
	return (
		<KingdomView>
			<EditViewWithAttributes
				context={KingdomContext}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</KingdomView>
	);
};

export default EditView;
