import {Server} from "@leight-core/leight";

const doKingdomCreate = Server.createPost("root.kingdom.create");
const doKingdomUpdate = Server.createPost("root.kingdom.update");
const doKingdomDelete = Server.createPost("root.kingdom.delete");
const fetchKingdomPage = Server.createFetchPage("root.user.kingdom.page");
const doKingdomSearch = (
	discovery,
	data,
	events,
) => Server.httpPost(
	discovery.link("root.kingdom.search"),
	data,
	events,
);

export {
	doKingdomCreate,
	doKingdomUpdate,
	doKingdomDelete,
	fetchKingdomPage,
	doKingdomSearch,
};
