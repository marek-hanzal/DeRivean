import {Card, Divider, Space} from "antd";
import {useParams} from "react-router";
import AttributeGroupStatistics from "site/common/attribute/AttributeGroupStatistics";
import CommonHomeView from "site/common/view/CommonHomeView";
import {useKingdomStatisticsFetch} from "site/game/module/kingdom/hook/hook";
import KingdomView from "site/game/module/kingdom/view/KingdomView";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";

const HomeView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<CommonHomeView
				menu={"game.kingdom"}
			>
				{data => (
					<Card style={{textAlign: "center"}}>
						<Space split={<Divider type={"horizontal"}/>} direction={"vertical"} size={"small"}>
							<KingdomStatistics action={events => {
								// eslint-disable-next-line
								useKingdomStatisticsFetch(params.kingdom, events);
							}}/>
							<AttributeGroupStatistics group={"resource"} attributes={data.attributes}/>
						</Space>
					</Card>
				)}
			</CommonHomeView>
		</KingdomView>
	);
};

export default HomeView;
