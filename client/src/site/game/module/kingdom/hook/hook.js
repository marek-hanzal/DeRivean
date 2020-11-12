import commonFetchHook from "utils/hook/commonFetchHook";

const useKingdomFetch = commonFetchHook("game.kingdom.fetch");
const useKingdomStatisticsFetch = commonFetchHook("game.kingdom.statistics", "{kingdom}");

export {
	useKingdomFetch,
	useKingdomStatisticsFetch,
};
