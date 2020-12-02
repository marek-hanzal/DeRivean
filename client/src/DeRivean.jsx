import {App} from "@leight-core/leight";
import {Image} from "antd";
import image from "./assets/icon-mini.png";
import {GameSite} from "./site/game/site/Site";
import {PublicSite} from "./site/public/site/Site";
import {RootSite} from "./site/root/site/Site";

const DeRivean = () => {
	return (
		<App
			titleTemplate={"DeRivean | %s"}
			sites={{
				public: <PublicSite/>,
				game: <GameSite/>,
				root: <RootSite/>,
			}}
			icon={<Image preview={false} src={image}/>}
		/>
	);
};

export default DeRivean;
