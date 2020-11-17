import commonFetchHook from "utils/hook/commonFetchHook";

const useUserFetch = commonFetchHook("root.user.fetch");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");

export {
	useUserFetch,
	useUserStatisticsFetch,
};
