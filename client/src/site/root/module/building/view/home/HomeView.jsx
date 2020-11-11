import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<BuildingView>
			<CommonHomeView
				context={BuildingContext}
				menu={"root.building"}
			>
				{data => null}
			</CommonHomeView>
		</BuildingView>
	);
};

export default HomeView;
