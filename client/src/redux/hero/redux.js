import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const HeroRedux = CreateRedux(
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
