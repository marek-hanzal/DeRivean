import {useUserFetch} from "redux/user/redux";
import UserContext from "site/root/module/user/component/UserContext";
import UserStatistics from "site/root/module/user/component/UserStatistics";
import UserView from "site/root/module/user/view/UserView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<CommonHomeView
			base={UserView}
			context={UserContext}
			param={"user"}
			fetch={useUserFetch}
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
