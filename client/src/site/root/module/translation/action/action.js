import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doTranslationCreate = doPost("root.translation.create");
const doTranslationUpdate = doPost("root.translation.update");
const doTranslationDelete = doPost("root.translation.delete");
const fetchTranslationPage = fetchPage("root.translation.page");

export {
	doTranslationCreate,
	doTranslationUpdate,
	doTranslationDelete,
	fetchTranslationPage,
};
