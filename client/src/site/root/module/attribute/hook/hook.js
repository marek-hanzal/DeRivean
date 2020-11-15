import commonFetchHook from "utils/hook/commonFetchHook";

const useAttributeFetch = commonFetchHook("root.attribute.fetch");
const useAttributeAttributesFetch = commonFetchHook("root.attribute.attributes");
const useAttributeStatisticsFetch = () => {
	throw new Error("TODO - prepare attribute stats");
};

export {
	useAttributeFetch,
	useAttributeAttributesFetch,
	useAttributeStatisticsFetch,
};
