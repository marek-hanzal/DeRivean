import {BuildingRedux} from "redux/building/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const BuildingView = ({children, ...props}) => {
	return (
		<BuildingContext.Provider value={{
			icon: <BuildingIcon/>,
			id: "root.building",
			redux: BuildingRedux,
			link: {
				home: Routes.root.building.home.link,
				edit: Routes.root.building.edit.link,
			}
		}}>
			<RootView context={BuildingContext} {...props}>
				{children}
			</RootView>
		</BuildingContext.Provider>
	);
};

export default BuildingView;
