import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import fetchPage from "utils/server/fetchPage";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.delete",
	"root.hero.fetch",
	{
		attributes: CreateLinkRedux("hero", "attributes", "root.hero.attributes"),
	},
);

const useHeroFetch = commonFetchHook(HeroRedux);
const dispatchHeroUpdate = commonUpdateDispatch(HeroRedux);
const fetchHeroPage = fetchPage("root.kingdom.hero.page", "kingdom");

export {
	HeroRedux,
	useHeroFetch,
	dispatchHeroUpdate,
	fetchHeroPage,
};
