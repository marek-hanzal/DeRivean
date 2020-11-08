import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import fetchPage from "utils/server/fetchPage";

const TranslationRedux = CreateCommonRedux(
	"translation",
	"root.translation.create",
	"root.translation.update",
	"root.translation.delete",
	"root.translation.fetch",
	{
		translation: CreateLinkRedux("translation", "translation", "public.translation"),
	}
);

const fetchTranslationPage = fetchPage("root.translation.page");

export {
	TranslationRedux,
	fetchTranslationPage,
};
