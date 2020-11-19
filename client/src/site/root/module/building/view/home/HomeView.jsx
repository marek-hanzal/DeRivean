import {Card} from "antd";
import BuildCountdown from "site/common/building/BuildCountdown";
import CommonHomeView from "site/common/view/CommonHomeView";
import BuildingView from "site/root/module/building/view/BuildingView";

const HomeView = () => {
	return (
		<BuildingView>
			<CommonHomeView
				menu={"root.building"}
			>
				{data => (
					<Card style={{textAlign: "center"}}>
						<BuildCountdown building={data}/>
					</Card>
				)}
			</CommonHomeView>
		</BuildingView>
	);
};

export default HomeView;
