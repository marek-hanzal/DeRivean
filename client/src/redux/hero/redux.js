import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import doCreate from "utils/server/doCreate";
import fetchPage from "utils/server/fetchPage";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.delete",
);

const doHeroCreate           = doCreate("root.hero.create");
const useHeroFetch           = commonFetchHook("root.hero.fetch");
const useHeroAttributesFetch = commonFetchHook("root.hero.attributes");
const dispatchHeroUpdate     = commonUpdateDispatch(HeroRedux);
const fetchHeroPage          = fetchPage("root.kingdom.hero.page", "kingdom");

export {
	HeroRedux,
	doHeroCreate,
	useHeroFetch,
	useHeroAttributesFetch,
	dispatchHeroUpdate,
	fetchHeroPage,
};
