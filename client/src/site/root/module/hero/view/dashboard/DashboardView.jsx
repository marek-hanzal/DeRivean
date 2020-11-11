import BaseDashboardView from "component/view/BaseDashboardView";
import {useKingdomStatisticsFetch} from "hook.js";
import {useParams} from "react-router";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroStatistics from "site/root/module/hero/component/HeroStatistics";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	const params = useParams();
	return (
		<HeroView>
			<BaseDashboardView
				context={HeroContext}
				children={
					<HeroStatistics show={["heroes"]} action={events => {
						// eslint-disable-next-line
						useKingdomStatisticsFetch(params.kingdom, events);
					}}/>
				}/>
		</HeroView>
	);
};

export default DashboardView;
