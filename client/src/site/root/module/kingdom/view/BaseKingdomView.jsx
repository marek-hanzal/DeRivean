import React from "react";
import {KingdomRedux} from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const KingdomContext = React.createContext(null);

const BaseKingdomView = ({children, ...props}) => {
	return (
		<KingdomContext.Provider value={{
			icon: <KingdomIcon/>,
			id: "root.kingdom",
			redux: KingdomRedux,
			link: {
				dashboard: Routes.root.kingdom.kingdom.link,
			}
		}}>
			<RootView context={KingdomContext} {...props}>
				{children}
			</RootView>
		</KingdomContext.Provider>
	);
};

export {
	BaseKingdomView,
	KingdomContext,
};
