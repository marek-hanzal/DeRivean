import UserContext from "site/root/module/user/component/UserContext";
import UserStatistics from "site/root/module/user/component/UserStatistics";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<CommonHomeView
			context={UserContext}
			navigation={data => null}
			menu={"root.user"}
		>
			{data => (
				<UserStatistics/>
			)}
		</CommonHomeView>
	);
};

export default HomeView;
