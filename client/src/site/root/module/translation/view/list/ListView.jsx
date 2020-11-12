import BaseListView from "component/view/BaseListView";
import TranslationList from "site/root/module/translation/component/TranslationList";
import TranslationView from "site/root/module/translation/view/TranslationView";

const ListView = () => {
	return (
		<TranslationView>
			<BaseListView>
				<TranslationList/>
			</BaseListView>
		</TranslationView>
	);
};

export default ListView;
