import commonFetchHook from "utils/hook/commonFetchHook";

const useBuildingFetch = commonFetchHook("root.building.fetch");
const useBuildingAttributesFetch = commonFetchHook("root.building.attributes");

export {
	useBuildingFetch,
	useBuildingAttributesFetch,
};
