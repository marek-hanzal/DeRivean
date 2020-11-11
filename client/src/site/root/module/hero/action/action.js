import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doHeroCreate = doPost("root.hero.create");
const doHeroUpdate = doPost("root.hero.update");
const doHeroDelete = doPost("root.hero.delete");
const fetchHeroPage = fetchPage("root.kingdom.hero.page", "kingdom");

export {
	doHeroCreate,
	doHeroUpdate,
	doHeroDelete,
	fetchHeroPage,
};
