import {Card} from "antd";
import CommonHomeView from "site/common/view/CommonHomeView";
import BuildCountdown from "site/root/module/building/component/BuildCountdown";
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
