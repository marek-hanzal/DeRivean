import {Server} from "@leight-core/leight";

const doHeroCreate = Server.createPost("root.hero.create");
const doHeroUpdate = Server.createPost("root.hero.update");
const doHeroDelete = Server.createPost("root.hero.delete");
const fetchHeroPage = Server.createFetchPage("root.kingdom.hero.page");

export {
	doHeroCreate,
	doHeroUpdate,
	doHeroDelete,
	fetchHeroPage,
};
