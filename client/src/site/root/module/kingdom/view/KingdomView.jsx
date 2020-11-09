import {
	KingdomRedux,
	useKingdomAttributesFetch,
	useKingdomFetch,
	useKingdomSearch
} from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const KingdomView = (
	{
		children,
		...props
	}) => {
	return (
		<KingdomContext.Provider value={{
			icon:        <KingdomIcon/>,
			id:          "root.kingdom",
			redux:       KingdomRedux,
			link:        Routes.root.kingdom,
			fetch:       useKingdomFetch,
			attributes:  useKingdomAttributesFetch,
			search:      useKingdomSearch,
			param:       "kingdom",
			parentParam: "user",
		}}>
			<RootView context={KingdomContext} {...props}>
				{children}
			</RootView>
		</KingdomContext.Provider>
	);
};

export default KingdomView;
