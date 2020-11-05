import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import {KingdomRedux} from "redux/kingdom/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroStatistics from "site/root/module/hero/component/HeroStatistics";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	const params = useParams();
	return (
		<HeroView>
			<BaseDashboardView context={HeroContext}>
				<HeroStatistics action={cancelToken => KingdomRedux.redux.statistics.dispatch.fetch(params.kingdom, cancelToken)}/>
			</BaseDashboardView>
		</HeroView>
	);
};

export default DashboardView;
