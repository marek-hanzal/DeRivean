import BaseDashboardView from "component/view/BaseDashboardView";
import {useKingdomStatisticsFetch} from "redux/kingdom/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroStatistics from "site/root/module/hero/component/HeroStatistics";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	return (
		<HeroView>
			<BaseDashboardView context={HeroContext}>
				<HeroStatistics action={useKingdomStatisticsFetch}/>
			</BaseDashboardView>
		</HeroView>
	);
};

export default DashboardView;
