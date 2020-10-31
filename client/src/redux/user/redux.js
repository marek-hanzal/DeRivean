import dismissAction from "utils/action/actions/dismissAction";
import CreateModule from "utils/redux/CreateModule";
import CreateSimpleDispatch from "utils/redux/CreateSimpleDispatch";
import CreateSimpleFetchDispatch from "utils/redux/CreateSimpleFetchDispatch";

const UserRedux = CreateModule(
	"user",
	"root.user.create",
	"root.user.update",
	"root.user.fetch",
	"root.user.page",
	{
		register: CreateSimpleDispatch("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateSimpleDispatch("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
		attributes: CreateSimpleFetchDispatch("user", "attributes", "root.user.attributes"),
	},
);

export default UserRedux;
