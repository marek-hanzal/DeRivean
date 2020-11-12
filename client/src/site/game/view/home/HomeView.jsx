import {Card} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import GameView from "site/game/view/GameView";

const HomeView = () => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect("game.home");
	return (
		<ModuleContext.Provider value={{id: "game.home"}}>
			<ModuleContext.Consumer>
				{({id}) => (
					<GameView>
						<Card title={t(`${id}.title`)}/>
					</GameView>
				)}
			</ModuleContext.Consumer>
		</ModuleContext.Provider>
	);
};

export default HomeView;
