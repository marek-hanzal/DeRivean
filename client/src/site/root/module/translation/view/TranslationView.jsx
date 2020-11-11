import {doTranslationCreate, doTranslationDelete, doTranslationUpdate, useTranslationFetch} from "redux/translation/redux";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
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
				link: Routes.root.translation,
			}}
			children={<RootView context={TranslationContext} {...props} children={children}/>}
		/>
	);
};

export default TranslationView;
