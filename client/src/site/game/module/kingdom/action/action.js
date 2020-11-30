import {Server} from "@leight-core/leight";

const doKingdomCreate = Server.createPost("game.kingdom.create");
const doKingdomUpdate = Server.createPost("game.kingdom.update");
const doKingdomDelete = Server.createPost("game.kingdom.delete");
const fetchKingdomPage = Server.createFetchPage("game.user.kingdom.page");

export {
	doKingdomCreate,
	doKingdomUpdate,
	doKingdomDelete,
	fetchKingdomPage,
};
