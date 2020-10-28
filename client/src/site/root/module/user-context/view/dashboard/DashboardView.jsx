import BaseDashboardView from "component/view/BaseDashboardView";
import {useSelector} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";
import UserAvatar from "site/root/module/user-context/component/UserAvatar";
import UserName from "site/root/module/user-context/component/UserName";
import UserContextView from "site/root/module/user-context/view/UserContextView";

const DashboardView = () => {
	const user = useSelector(UserFetchRedux.selector.getPayload);
	return (
		<BaseDashboardView
			base={UserContextView}
			id={"root.userContext"}
			icon={<UserAvatar user={user} size={64}/>}
			title={<UserName user={user}/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
