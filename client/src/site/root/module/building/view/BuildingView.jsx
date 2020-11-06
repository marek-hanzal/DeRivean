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
			link: Routes.root.building,
		}}>
			<RootView context={BuildingContext} {...props}>
				{children}
			</RootView>
		</BuildingContext.Provider>
	);
};

export default BuildingView;
