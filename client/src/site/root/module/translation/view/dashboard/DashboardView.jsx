import BaseDashboardView from "component/view/BaseDashboardView";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationView from "site/root/module/translation/view/TranslationView";

const DashboardView = () => {
	return (
		<TranslationView>
			<BaseDashboardView context={TranslationContext}>
			</BaseDashboardView>
		</TranslationView>
	);
};

export default DashboardView;
