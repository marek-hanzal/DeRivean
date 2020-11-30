import {createFetchHook} from "@leight-core/leight";

const useKingdomFetch = createFetchHook("game.kingdom.fetch");
const useKingdomStatisticsFetch = createFetchHook("game.kingdom.statistics", "{kingdom}");

export {
	useKingdomFetch,
	useKingdomStatisticsFetch,
};
