import {KingdomRedux, useKingdomFetch} from "redux/kingdom/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
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
				<KingdomStatistics action={cancelToken => KingdomRedux.redux.statistics.dispatch.fetch(data.id, cancelToken)}/>
			)}
		</CommonHomeView>
	);
};

export default HomeView;
