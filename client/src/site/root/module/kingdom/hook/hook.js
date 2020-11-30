import {createFetchHook} from "@leight-core/leight";

const useKingdomFetch = createFetchHook("root.kingdom.fetch");
const useKingdomStatisticsFetch = createFetchHook("root.kingdom.statistics", "{kingdom}");

export {
	useKingdomFetch,
	useKingdomStatisticsFetch,
};
