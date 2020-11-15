import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doAttributeCreate = doPost("root.attribute.create");
const doAttributeUpdate = doPost("root.attribute.update");
const doAttributeDelete = doPost("root.attribute.delete");
const fetchAttributePage = fetchPage("root.attribute.page");

export {
	doAttributeCreate,
	doAttributeUpdate,
	doAttributeDelete,
	fetchAttributePage,
};
