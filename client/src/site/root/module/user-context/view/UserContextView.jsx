import useFetchUser from "site/root/module/user-context/hook/useFetchUser";
import RootView from "site/root/view/RootView";

const UserContextView = props => {
	useFetchUser();
	return (
		<RootView {...props}/>
	);
};

export default UserContextView;
