import RootMenu from "site/internal/module/kingdom/component/RootMenu";
import HeroesMenu from "site/internal/module/kingdom/module/heroes/component/HeroesMenu";

const KingdomMenu = () => ([].concat(
	HeroesMenu(),
	RootMenu(),
));

export default KingdomMenu;
