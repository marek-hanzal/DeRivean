import {useParams} from "react-router";
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
					<KingdomStatistics action={events => {
						// eslint-disable-next-line
						useKingdomStatisticsFetch(params.kingdom, events);
					}}/>
				)}
			</CommonHomeView>
		</KingdomView>
	);
};

export default HomeView;
