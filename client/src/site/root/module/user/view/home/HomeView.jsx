import CommonHomeView from "site/common/view/CommonHomeView";
import UserStatistics from "site/root/module/user/component/UserStatistics";
import UserView from "site/root/module/user/view/UserView";

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
