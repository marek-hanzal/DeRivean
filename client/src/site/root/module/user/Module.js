import {doUserCreate, doUserDelete, doUserSearch, doUserUpdate, fetchUserPage} from "site/root/module/user/action/action";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import {useUserFetch} from "site/root/module/user/hook/hook";
import UserView from "site/root/module/user/view/UserView";
import Routes from "site/Routes";
import Module from "utils/Module";

class UserModule extends Module {
	search;

	constructor(id) {
		super(id);
		this.validateFields.push("search");
	}
}

function CreateUserModule() {
	const module = new UserModule("root.user");
	module.baseView = UserView;
	module.icon = <UserIcon/>;
	module.link = Routes.root.user;
	module.create = doUserCreate;
	module.update = doUserUpdate;
	module.delete = doUserDelete;
	module.fetch = useUserFetch;
	module.page = fetchUserPage;
	module.param = "user";
	module.search = doUserSearch;
	return module.validate();
}

export {
	CreateUserModule,
};
