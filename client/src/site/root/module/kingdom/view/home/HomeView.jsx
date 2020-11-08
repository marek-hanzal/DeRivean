import {useParams} from "react-router";
import {useKingdomFetch, useKingdomStatisticsFetch} from "redux/kingdom/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	const params = useParams();
	return (
		<CommonHomeView
			base={KingdomView}
			context={KingdomContext}
			param={"kingdom"}
			fetch={useKingdomFetch}
			navigation={data => ({user: data.user})}
			menu={"root.kingdom"}
		>
			{data => (
				<KingdomStatistics action={(onSuccess, onFailure, onReason) => {
					// eslint-disable-next-line
					useKingdomStatisticsFetch(params.kingdom, onSuccess, onFailure, onReason);
				}}/>
			)}
		</CommonHomeView>
	);
};

export default HomeView;
