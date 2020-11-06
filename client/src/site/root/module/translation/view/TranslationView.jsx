import {TranslationRedux} from "redux/translation/redux";
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
			link: {
				home: Routes.root.translation.home,
				dashboard: Routes.root.translation.dashboard,
			}
		}}>
			<RootView context={TranslationContext} {...props}>
				{children}
			</RootView>
		</TranslationContext.Provider>
	);
};

export default TranslationView;
