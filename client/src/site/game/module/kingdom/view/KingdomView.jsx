import ModuleContext from "component/ModuleContext";
import {CreateKingdomModule} from "site/game/module/kingdom/Module";
import GameView from "site/game/view/GameView";

const KingdomView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateKingdomModule()}
			children={<GameView {...props} children={children}/>}
		/>
	);
};

export default KingdomView;
