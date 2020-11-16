import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doAttributeTypeCreate = doPost("root.attribute-type.create");
const doAttributeTypeUpdate = doPost("root.attribute-type.update");
const doAttributeTypeDelete = doPost("root.attribute-type.delete");
const fetchAttributeTypePage = fetchPage("root.attribute-type.page");

export {
	doAttributeTypeCreate,
	doAttributeTypeUpdate,
	doAttributeTypeDelete,
	fetchAttributeTypePage,
};
