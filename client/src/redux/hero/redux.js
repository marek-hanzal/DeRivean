import { selectLink } from "redux/discovery/redux";
import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const HeroRedux = CreateCommonRedux(
	"hero",
	"root.hero.create",
	"root.hero.update",
	"root.hero.delete",
);

const doHeroCreate           = (
	state,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		selectLink("root.hero.create", state),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};
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
