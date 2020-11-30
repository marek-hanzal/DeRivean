import {Server} from "@leight-core/leight";

const doAttributeTypeCreate = Server.createPost("root.attribute-type.create");
const doAttributeTypeUpdate = Server.createPost("root.attribute-type.update");
const doAttributeTypeDelete = Server.createPost("root.attribute-type.delete");
const fetchAttributeTypePage = Server.createFetchPage("root.attribute-group.attribute-type.page");

export {
	doAttributeTypeCreate,
	doAttributeTypeUpdate,
	doAttributeTypeDelete,
	fetchAttributeTypePage,
};
