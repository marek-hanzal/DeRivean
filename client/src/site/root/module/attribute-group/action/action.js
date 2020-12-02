import {Server} from "@leight-core/leight";

const [
	doAttributeGroupCreate,
	doAttributeGroupUpdate,
	doAttributeGroupDelete,
	fetchAttributeGroupPage,
	useAttributeGroupFetch,
] = Server.createCrud("root.attribute-group");

export {
	doAttributeGroupCreate,
	doAttributeGroupUpdate,
	doAttributeGroupDelete,
	fetchAttributeGroupPage,
	useAttributeGroupFetch
};
