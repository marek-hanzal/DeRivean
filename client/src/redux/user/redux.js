import dismissAction from "utils/action/actions/dismissAction";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";

const UserRedux = CreateCommonRedux(
	"user",
	"root.user.create",
	"root.user.update",
	"root.user.fetch",
	"root.user.page",
	{
		register: CreateActionRedux("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateActionRedux("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
		attributes: CreateLinkRedux("user", "attributes", "root.user.attributes"),
	},
);

export default UserRedux;
