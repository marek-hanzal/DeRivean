import commonFetchHook from "utils/hook/commonFetchHook";

const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");

export {
	useKingdomFetch,
	useKingdomStatisticsFetch,
};
