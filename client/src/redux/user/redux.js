import dismissAction from "utils/action/actions/dismissAction";
import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";
import fetchPage from "utils/server/fetchPage";

const UserRedux = CreateCommonRedux(
	"user",
	"root.user.create",
	"root.user.update",
	"root.user.delete",
	"root.user.fetch",
	{
		register: CreateActionRedux("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateActionRedux("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
		attributes: CreateLinkRedux("user", "attributes", "root.user.attributes"),
		search: CreatePostRedux("user", "search", "root.user.search"),
		statistics: CreateFetchRedux("statistics", "root.user.statistics", "{user}"),
	},
);

const useUserFetch = commonFetchHook(UserRedux);
const dispatchUserUpdate = commonUpdateDispatch(UserRedux);
const fetchUserPage = fetchPage("root.user.page");

export {
	UserRedux,
	useUserFetch,
	dispatchUserUpdate,
	fetchUserPage,
};
