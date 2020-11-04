import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const TranslationRedux = CreateRedux({
	translation: CreateLinkRedux("translation", "translation", "public.translation"),
});

export {
	TranslationRedux,
};
