import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";

const root = KingdomPath.root + "/heroes";

const KingdomHeroesPath = {
	root: root,
	home: root + "/home",
	list: root + "/list",
	create: root + "/create",
};

export default KingdomHeroesPath;
