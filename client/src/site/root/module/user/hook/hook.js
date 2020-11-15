import commonFetchHook from "utils/hook/commonFetchHook";

const useUserFetch = commonFetchHook("root.user.fetch");
const useUserAttributesFetch = commonFetchHook("root.user.attributes");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");

export {
	useUserFetch,
	useUserAttributesFetch,
	useUserStatisticsFetch,
};
