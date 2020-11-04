import BaseDashboardView from "component/view/BaseDashboardView";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationStatistics from "site/root/module/translation/component/TranslationStatistics";
import TranslationView from "site/root/module/translation/view/TranslationView";

const DashboardView = () => {
	return (
		<TranslationView>
			<BaseDashboardView context={TranslationContext}>
				<TranslationStatistics/>
			</BaseDashboardView>
		</TranslationView>
	);
};

export default DashboardView;
