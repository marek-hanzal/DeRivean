import {QuestionCircleOutlined} from "@ant-design/icons";
import TranslationIcon from "../../root/module/translation/component/icon/TranslationIcon";
import UserIcon from "../../root/module/user/component/icon/UserIcon";
import BuildingIcon from "./BuildingIcon";
import HeroIcon from "./HeroIcon";
import KingdomIcon from "./KingdomIcon";

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
