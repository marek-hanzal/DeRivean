import CreateModule from "utils/redux/CreateModule";
import CreateSimpleFetchDispatch from "utils/redux/CreateSimpleFetchDispatch";

const HeroRedux = CreateModule(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.fetch",
	"root.kingdom.hero.page",
	{
		attributes: CreateSimpleFetchDispatch("hero", "attributes", "root.hero.attributes"),
	},
);

export default HeroRedux;
