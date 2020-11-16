import commonFetchHook from "utils/hook/commonFetchHook";

const useAttributeGroupFetch = commonFetchHook("root.attribute-group.fetch");
const useAttributeGroupNameFetch = commonFetchHook("root.attribute-group.attribute-type.list", "{name}");

export {
	useAttributeGroupFetch,
	useAttributeGroupNameFetch,
};
