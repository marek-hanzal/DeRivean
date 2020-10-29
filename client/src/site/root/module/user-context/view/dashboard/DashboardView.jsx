import BaseDashboardView from "component/view/BaseDashboardView";
import UserAvatar from "site/root/module/user-context/component/UserAvatar";
import UserName from "site/root/module/user-context/component/UserName";
import UserContextView from "site/root/module/user-context/view/UserContextView";
import useUserSelector from "site/root/module/user/hook/useUserSelector";

const DashboardView = () => {
	const user = useUserSelector();
	return (
		<BaseDashboardView
			base={UserContextView}
			id={"root.userContext"}
			open={["root.userContext.kingdom"]}
			icon={<UserAvatar user={user} size={64}/>}
			title={<UserName user={user}/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
