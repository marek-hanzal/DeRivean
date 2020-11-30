import {createFetchHook} from "@leight-core/leight";

const useBuildingFetch = createFetchHook("game.building.fetch");
const useBuildingStatisticsFetch = createFetchHook("game.building.statistics", "{building}");

export {
	useBuildingFetch,
	useBuildingStatisticsFetch,
};
