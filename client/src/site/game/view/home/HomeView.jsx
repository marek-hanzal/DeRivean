import {ModuleContext, useLayoutContext} from "@leight-core/leight";
import {Card} from "antd";
import {useTranslation} from "react-i18next";
import GameView from "../GameView";

const HomeView = () => {
	const {t} = useTranslation();
	const layoutContext = useLayoutContext();
	layoutContext.useMenuSelect(["game.home"]);
	return (
		<ModuleContext.Provider value={{id: "game.home"}}>
			<ModuleContext.Consumer>
				{({id}) => (
					<GameView>
						<Card title={t(id + ".title")}/>
					</GameView>
				)}
			</ModuleContext.Consumer>
		</ModuleContext.Provider>
	);
};

export default HomeView;
