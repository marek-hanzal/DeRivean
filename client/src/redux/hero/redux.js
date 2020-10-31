import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateModule from "utils/redux/CreateModule";

const HeroRedux = CreateModule(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.fetch",
	"root.kingdom.hero.page",
	{
		attributes: CreateLinkRedux("hero", "attributes", "root.hero.attributes"),
	},
);

export default HeroRedux;
