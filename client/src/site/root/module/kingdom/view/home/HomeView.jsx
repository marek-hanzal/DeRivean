import {Card, Divider, Space} from "antd";
import {useParams} from "react-router";
import AttributeGroupStatistics from "site/common/attribute/AttributeGroupStatistics";
import CommonHomeView from "site/common/view/CommonHomeView";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import {useKingdomStatisticsFetch} from "site/root/module/kingdom/hook/hook";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const HomeView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<CommonHomeView
				menu={"root.kingdom"}
			>
				{data => (
					<Card style={{textAlign: "center"}}>
						<Space split={<Divider type={"horizontal"}/>} direction={"vertical"}>
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
