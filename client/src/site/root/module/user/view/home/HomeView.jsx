import UserStatistics from "site/root/module/user/component/UserStatistics";
import UserView from "site/root/module/user/view/UserView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<UserView>
			<CommonHomeView
				menu={"root.user"}
			>
				{data => (
					<UserStatistics/>
				)}
			</CommonHomeView>
		</UserView>
	);
};

export default HomeView;
