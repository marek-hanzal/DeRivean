import CreatePostRedux from "utils/redux/CreatePostRedux";
import CreateRedux from "utils/redux/CreateRedux";

const SearchRedux = CreateRedux({
	search: CreatePostRedux("search", "search", "root.search"),
});

export {
	SearchRedux,
};
