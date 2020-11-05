import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import {UserRedux} from "redux/user/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<h1>Use user's statistics (these are global)</h1>
				<KingdomStatistics show={["kingdoms", "buildings", "heroes"]} action={cancelToken => UserRedux.redux.statistics.dispatch.fetch(params.user, cancelToken)}/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
