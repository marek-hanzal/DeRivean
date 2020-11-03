import {BaseKingdomView, KingdomContext} from "site/root/module/kingdom/view/BaseKingdomView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const KingdomView = () => {
	return (
		<BaseKingdomView>
			<EditViewWithAttributes
				context={KingdomContext}
				formName={"kingdom"}
				param={"kingdom"}
				menu={"root.kingdom"}
				open={["root.hero", "root.building"]}
				enableSubmit={true}
			/>
		</BaseKingdomView>
	);
};

export default KingdomView;
