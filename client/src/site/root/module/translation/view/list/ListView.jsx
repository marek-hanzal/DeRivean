import BaseListView from "component/view/BaseListView";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationList from "site/root/module/translation/component/TranslationList";
import TranslationView from "site/root/module/translation/view/TranslationView";

const ListView = () => {
	return (
		<TranslationView>
			<BaseListView context={TranslationContext}>
				<TranslationList/>
			</BaseListView>
		</TranslationView>
	);
};

export default ListView;
