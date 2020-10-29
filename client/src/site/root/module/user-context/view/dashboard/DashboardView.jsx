import DeferredInput from "component/form/DeferredInput";
import BaseDashboardView from "component/view/BaseDashboardView";
import UserAvatar from "site/root/module/user-context/component/UserAvatar";
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
			title={<DeferredInput item={user} name={"name"} label={"root.userContext.dashboard.view.name"}/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
