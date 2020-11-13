import commonFetchHook from "utils/hook/commonFetchHook";

const useBuildingFetch = commonFetchHook("game.building.fetch");
const useBuildingStatisticsFetch = commonFetchHook("game.building.statistics", "{building}");

export {
	useBuildingFetch,
	useBuildingStatisticsFetch,
};
