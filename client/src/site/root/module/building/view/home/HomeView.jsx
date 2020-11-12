import CommonHomeView from "site/common/view/CommonHomeView";
import BuildingView from "site/root/module/building/view/BuildingView";

const HomeView = () => {
	return (
		<BuildingView>
			<CommonHomeView
				menu={"root.building"}
			>
				{data => null}
			</CommonHomeView>
		</BuildingView>
	);
};

export default HomeView;
