import ModuleContext from "component/ModuleContext";
import {CreateBuildingModule} from "site/game/module/building/Module";
import GameView from "site/game/view/GameView";

const BuildingView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateBuildingModule()}
			children={<GameView {...props} children={children}/>}
		/>
	);
};

export default BuildingView;
