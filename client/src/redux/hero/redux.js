import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.delete",
);

const doHeroCreate = doPost("root.hero.create");
const doHeroUpdate = doPost("root.hero.update");
const useHeroFetch = commonFetchHook("root.hero.fetch");
const useHeroAttributesFetch = commonFetchHook("root.hero.attributes");
const dispatchHeroUpdate = commonUpdateDispatch(HeroRedux);
const fetchHeroPage = fetchPage("root.kingdom.hero.page", "kingdom");

export {
	HeroRedux,
	doHeroCreate,
	doHeroUpdate,
	useHeroFetch,
	useHeroAttributesFetch,
	dispatchHeroUpdate,
	fetchHeroPage,
};
