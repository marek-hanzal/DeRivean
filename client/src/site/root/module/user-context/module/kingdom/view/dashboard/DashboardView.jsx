import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<KingdomView
			id={"root.userContext.kingdom.dashboard"}
			open={"root.userContext.kingdom"}
		>
			<h1>Kingdom dashboard</h1>
		</KingdomView>
	);
};

export default DashboardView;
