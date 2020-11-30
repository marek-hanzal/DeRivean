import {Server} from "@leight-core/leight";

const doTranslationCreate = Server.createPost("root.translation.create");
const doTranslationUpdate = Server.createPost("root.translation.update");
const doTranslationDelete = Server.createPost("root.translation.delete");
const fetchTranslationPage = Server.createFetchPage("root.translation.page");

export {
	doTranslationCreate,
	doTranslationUpdate,
	doTranslationDelete,
	fetchTranslationPage,
};
