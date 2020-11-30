import {createFetchHook} from "@leight-core/leight";

const useUserFetch = createFetchHook("root.user.fetch");
const useUserStatisticsFetch = createFetchHook("root.user.statistics", "{user}");

export {
	useUserFetch,
	useUserStatisticsFetch,
};
