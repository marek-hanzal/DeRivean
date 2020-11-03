import React from "react";
import {BuildingRedux} from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const BuildingContext = React.createContext(null);

const BuildingView = ({children, ...props}) => {
	return (
		<BuildingContext.Provider value={{
			icon: <BuildingIcon/>,
			id: "root.building",
			redux: BuildingRedux,
			link: {
				home: Routes.root.building.home.link,
			}
		}}>
			<RootView context={BuildingContext} {...props}>
				{children}
			</RootView>
		</BuildingContext.Provider>
	);
};

export {
	BuildingView,
	BuildingContext,
};
