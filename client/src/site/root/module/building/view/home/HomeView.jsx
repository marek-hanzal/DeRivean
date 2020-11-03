import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HomeView = () => {
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

export default HomeView;
