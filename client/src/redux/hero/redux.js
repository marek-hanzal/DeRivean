import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import fetchPage from "utils/server/fetchPage";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.delete",
);

const useHeroFetch = commonFetchHook("root.hero.fetch");
const useHeroAttributesFetch = commonFetchHook("root.hero.attributes");
const dispatchHeroUpdate = commonUpdateDispatch(HeroRedux);
const fetchHeroPage = fetchPage("root.kingdom.hero.page", "kingdom");

export {
	HeroRedux,
	useHeroFetch,
	useHeroAttributesFetch,
	dispatchHeroUpdate,
	fetchHeroPage,
};
