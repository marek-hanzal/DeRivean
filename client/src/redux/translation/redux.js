import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";

const TranslationRedux = CreateCommonRedux(
	"translation",
	"root.translation.create",
	"root.translation.update",
	"root.translation.delete",
	"root.translation.fetch",
	"root.translation.page",
	{
		translation: CreateLinkRedux("translation", "translation", "public.translation"),
	}
);

export {
	TranslationRedux,
};
