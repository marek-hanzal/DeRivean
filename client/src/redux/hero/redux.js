import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.delete",
	"root.hero.fetch",
	"root.kingdom.hero.page",
	{
		attributes: CreateLinkRedux("hero", "attributes", "root.hero.attributes"),
	},
);

const useHeroFetch = commonFetchHook(HeroRedux);

const dispatchHeroUpdate = commonUpdateDispatch(HeroRedux);

export {
	HeroRedux,
	useHeroFetch,
	dispatchHeroUpdate,
};
