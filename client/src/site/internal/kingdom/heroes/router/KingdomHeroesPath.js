import KingdomPath from "site/internal/kingdom/router/KingdomPath";

const root = KingdomPath.root + "/heroes";

const KingdomHeroesPath = {
	root: root,
	home: root + "/home",
	list: root + "/list",
};

export default KingdomHeroesPath;
