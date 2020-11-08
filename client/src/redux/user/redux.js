import dismissAction from "utils/action/actions/dismissAction";
import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";
import fetchPage from "utils/server/fetchPage";

const UserRedux = CreateCommonRedux(
	"user",
	"root.user.create",
	"root.user.update",
	"root.user.delete",
	{
		register: CreateActionRedux("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateActionRedux("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
		attributes: CreateLinkRedux("user", "attributes", "root.user.attributes"),
		search: CreatePostRedux("user", "search", "root.user.search"),
	},
);

const useUserFetch = commonFetchHook("root.user.fetch");
const useUserAttributesFetch = commonFetchHook("root.user.attributes");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");
const dispatchUserUpdate = commonUpdateDispatch(UserRedux);
const fetchUserPage = fetchPage("root.user.page");

export {
	UserRedux,
	useUserFetch,
	useUserAttributesFetch,
	useUserStatisticsFetch,
	dispatchUserUpdate,
	fetchUserPage,
};
