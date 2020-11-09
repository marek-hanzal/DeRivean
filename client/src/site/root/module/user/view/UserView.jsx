import {doUserCreate, doUserDelete, doUserUpdate, useUserAttributesFetch, useUserFetch, useUserSearch} from "redux/user/redux";
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
		<UserContext.Provider value={{
			icon: <UserIcon/>,
			id: "root.user",
			link: Routes.root.user,
			create: doUserCreate,
			update: doUserUpdate,
			delete: doUserDelete,
			fetch: useUserFetch,
			attributes: useUserAttributesFetch,
			search: useUserSearch,
			param: "user",
		}}>
			<RootView context={UserContext} {...props}>
				{children}
			</RootView>
		</UserContext.Provider>
	);
};

export default UserView;
