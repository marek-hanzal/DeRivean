import CreatePostRedux from "utils/redux/CreatePostRedux";
import CreateRedux from "utils/redux/CreateRedux";

const LanguageRedux = CreateRedux({
	language: CreatePostRedux("language", "language", "public.language"),
});

export {
	LanguageRedux,
};
