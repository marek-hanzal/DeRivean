import {App} from "@leight-core/leight";
import {Image} from "antd";
import image from "assets/icon-small.png";
import {GameSite} from "site/game/site/Site";
import {PublicSite} from "site/public/site/Site";
import {RootSite} from "site/root/site/Site";

const DeRivean = () => {
	return (
		<App
			titleTemplate={"DeRivean | %s"}
			sites={{
				common: <PublicSite/>,
				game: <GameSite/>,
				root: <RootSite/>,
			}}
			icon={<Image preview={false} src={image}/>}
		/>
	);
};

export default DeRivean;
