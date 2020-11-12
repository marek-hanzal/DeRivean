import ModuleContext from "component/ModuleContext";
import {CreateUserModule} from "site/root/module/user/Module";
import RootView from "site/root/view/RootView";

const UserView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateUserModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default UserView;
