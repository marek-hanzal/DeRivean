import BaseDashboardView from "component/view/BaseDashboardView";
import TranslationStatistics from "site/root/module/translation/component/TranslationStatistics";
import TranslationView from "site/root/module/translation/view/TranslationView";

const DashboardView = () => {
	return (
		<TranslationView>
			<BaseDashboardView>
				<TranslationStatistics/>
			</BaseDashboardView>
		</TranslationView>
	);
};

export default DashboardView;
