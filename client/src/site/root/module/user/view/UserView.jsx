import React from "react";
import {UserRedux} from "redux/user/redux";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const UserContext = React.createContext(null);

const UserView = ({children, ...props}) => {
	return (
		<UserContext.Provider value={{
			icon: <UserIcon/>,
			id: "root.user",
			redux: UserRedux,
			link: {
				home: Routes.root.user.home.link,
			}
		}}>
			<RootView context={UserContext} {...props}>
				{children}
			</RootView>
		</UserContext.Provider>
	);
};

export {
	UserView,
	UserContext,
};
