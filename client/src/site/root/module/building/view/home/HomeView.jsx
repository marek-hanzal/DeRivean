import {useBuildingFetch} from "redux/building/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<CommonHomeView
			base={BuildingView}
			context={BuildingContext}
			param={"building"}
			fetch={useBuildingFetch}
			navigation={data => ({kingdom: data.kingdom})}
			menu={"root.building"}
		>
			{data => null}
		</CommonHomeView>
	);
};

export default HomeView;
