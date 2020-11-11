import {doKingdomCreate, doKingdomDelete, doKingdomSearch, doKingdomUpdate, fetchKingdomPage} from "site/root/module/kingdom/action/action";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import {useKingdomAttributesFetch, useKingdomFetch} from "site/root/module/kingdom/hook/hook";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const KingdomView = (
	{
		children,
		...props
	}) => {
	return (
		<KingdomContext.Provider
			value={{
				base: KingdomView,
				icon: <KingdomIcon/>,
				id: "root.kingdom",
				link: Routes.root.kingdom,
				create: doKingdomCreate,
				update: doKingdomUpdate,
				delete: doKingdomDelete,
				fetch: useKingdomFetch,
				page: fetchKingdomPage,
				attributes: useKingdomAttributesFetch,
				search: doKingdomSearch,
				param: "kingdom",
				parentParam: "user",
			}}
			children={<RootView context={KingdomContext} {...props} children={children}/>}
		/>
	);
};

export default KingdomView;
