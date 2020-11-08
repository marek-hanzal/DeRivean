import {TranslationRedux, useTranslationFetch} from "redux/translation/redux";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const TranslationView = ({children, ...props}) => {
	return (
		<TranslationContext.Provider value={{
			icon: <TranslationIcon/>,
			id: "root.translation",
			redux: TranslationRedux,
			fetch: useTranslationFetch,
			link: Routes.root.translation,
		}}>
			<RootView context={TranslationContext} {...props}>
				{children}
			</RootView>
		</TranslationContext.Provider>
	);
};

export default TranslationView;
