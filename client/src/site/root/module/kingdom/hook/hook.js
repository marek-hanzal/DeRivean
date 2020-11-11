import commonFetchHook from "utils/hook/commonFetchHook";

const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");

export {
	useKingdomFetch,
	useKingdomAttributesFetch,
	useKingdomStatisticsFetch,
};
