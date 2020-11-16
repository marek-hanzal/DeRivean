import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doAttributeGroupCreate = doPost("root.attribute-group.create");
const doAttributeGroupUpdate = doPost("root.attribute-group.update");
const doAttributeGroupDelete = doPost("root.attribute-group.delete");
const fetchAttributeGroupPage = fetchPage("root.attribute-group.page");

export {
	doAttributeGroupCreate,
	doAttributeGroupUpdate,
	doAttributeGroupDelete,
	fetchAttributeGroupPage,
};
