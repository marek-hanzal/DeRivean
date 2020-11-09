import { selectLink } from "redux/discovery/redux";
import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const BuildingRedux = CreateCommonRedux(
	"building",
	"root.building.create",
	"root.building.update",
	"root.building.delete",
);

const doBuildingCreate           = (
	state,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		selectLink("root.building.create", state),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};
const useBuildingFetch           = commonFetchHook("root.building.fetch");
const useBuildingAttributesFetch = commonFetchHook("root.building.attributes");
const dispatchBuildingUpdate     = commonUpdateDispatch(BuildingRedux);
const fetchBuildingPage          = fetchPage("root.kingdom.building.page", "kingdom");

export {
	BuildingRedux,
	doBuildingCreate,
	useBuildingFetch,
	useBuildingAttributesFetch,
	dispatchBuildingUpdate,
	fetchBuildingPage,
};
