import FetchUser from "site/root/module/user-context/component/FetchUser";
import RootView from "site/root/view/RootView";

const UserContextView = props =>
	<FetchUser>
		<RootView {...props}/>
	</FetchUser>
;

export default UserContextView;
