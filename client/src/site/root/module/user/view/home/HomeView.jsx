import {Card} from "antd";
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
					<Card style={{textAlign: "center"}}>
						<UserStatistics/>
					</Card>
				)}
			</CommonHomeView>
		</UserView>
	);
};

export default HomeView;
