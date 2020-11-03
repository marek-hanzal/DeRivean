import React from "react";
import {BuildingRedux} from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const BuildingContext = React.createContext(null);

const BaseBuildingView = ({children, ...props}) => {
	return (
		<BuildingContext.Provider value={{
			icon: <BuildingIcon/>,
			id: "root.building",
			redux: BuildingRedux,
			link: {
				dashboard: Routes.root.building.building.link,
			}
		}}>
			<RootView context={BuildingContext} {...props}>
				{children}
			</RootView>
		</BuildingContext.Provider>
	);
};

export {
	BaseBuildingView,
	BuildingContext,
};
