import BuildingView from "site/root/module/building/view/BuildingView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

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
