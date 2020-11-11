import {doTranslationCreate, doTranslationDelete, doTranslationUpdate, fetchTranslationPage} from "site/root/module/translation/action/action";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import {useTranslationFetch} from "site/root/module/translation/hook/hook";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const TranslationView = (
	{
		children,
		...props
	}) => {
	return (
		<TranslationContext.Provider
			value={{
				base: TranslationView,
				icon: <TranslationIcon/>,
				id: "root.translation",
				create: doTranslationCreate,
				update: doTranslationUpdate,
				delete: doTranslationDelete,
				fetch: useTranslationFetch,
				page: fetchTranslationPage,
				link: Routes.root.translation,
			}}
			children={<RootView context={TranslationContext} {...props} children={children}/>}
		/>
	);
};

export default TranslationView;
