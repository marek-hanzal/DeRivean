import {QuestionCircleOutlined} from "@ant-design/icons";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";

const icons = {
	user: <UserIcon/>,
	users: <UserIcon/>,
	kingdom: <KingdomIcon/>,
	kingdoms: <KingdomIcon/>,
	hero: <HeroIcon/>,
	heroes: <HeroIcon/>,
	building: <BuildingIcon/>,
	buildings: <BuildingIcon/>,
	translation: <TranslationIcon/>,
	translations: <TranslationIcon/>,
};

const ModuleIcon = ({module}) => {
	return icons[module] || <QuestionCircleOutlined/>;
};

export default ModuleIcon;
