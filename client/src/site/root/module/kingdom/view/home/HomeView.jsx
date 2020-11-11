import {useParams} from "react-router";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import {useKingdomStatisticsFetch} from "site/root/module/kingdom/hook/hook";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<CommonHomeView
				context={KingdomContext}
				navigation={data => ({user: data.user})}
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
