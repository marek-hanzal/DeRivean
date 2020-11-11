import {doUserCreate, doUserDelete, doUserSearch, doUserUpdate, fetchUserPage, useUserAttributesFetch, useUserFetch} from "hook.js";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import UserContext from "site/root/module/user/component/UserContext";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const UserView = (
	{
		children,
		...props
	}) => {
	return (
		<UserContext.Provider
			value={{
				base: UserView,
				icon: <UserIcon/>,
				id: "root.user",
				link: Routes.root.user,
				create: doUserCreate,
				update: doUserUpdate,
				delete: doUserDelete,
				fetch: useUserFetch,
				page: fetchUserPage,
				attributes: useUserAttributesFetch,
				search: doUserSearch,
				param: "user",
			}}
			children={<RootView context={UserContext} {...props} children={children}/>}
		/>
	);
};

export default UserView;
