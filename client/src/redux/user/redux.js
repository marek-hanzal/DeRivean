import dismissAction from "utils/action/actions/dismissAction";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateModule from "utils/redux/CreateModule";

const UserRedux = CreateModule(
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
		attributes: CreateActionRedux("user", "attributes", "root.user.attributes"),
	},
);

export default UserRedux;
