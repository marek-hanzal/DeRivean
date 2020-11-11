import commonFetchHook from "utils/hook/commonFetchHook";

const useHeroFetch = commonFetchHook("root.hero.fetch");
const useHeroAttributesFetch = commonFetchHook("root.hero.attributes");

export {
	useHeroFetch,
	useHeroAttributesFetch,
};
