import {Server} from "@leight-core/leight";

const doAttributeGroupCreate = Server.createPost("root.attribute-group.create");
const doAttributeGroupUpdate = Server.createPost("root.attribute-group.update");
const doAttributeGroupDelete = Server.createPost("root.attribute-group.delete");
const fetchAttributeGroupPage = Server.createFetchPage("root.attribute-group.page");

export {
	doAttributeGroupCreate,
	doAttributeGroupUpdate,
	doAttributeGroupDelete,
	fetchAttributeGroupPage,
};
