import {useParams} from "react-router";
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
