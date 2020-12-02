import {Server} from "@leight-core/leight";

const [
	doAttributeTypeCreate,
	doAttributeTypeUpdate,
	doAttributeTypeDelete,
	fetchAttributeTypePage,
	useAttributeTypeFetch,
] = Server.createCrud("root.attribute-type", "root.attribute-group.attribute-type");

export {
	doAttributeTypeCreate,
	doAttributeTypeUpdate,
	doAttributeTypeDelete,
	fetchAttributeTypePage,
	useAttributeTypeFetch,
};
