import {Server} from "@leight-core/leight";

const doUserCreate = Server.httpPost("root.user.create");
const doUserUpdate = Server.httpPost("root.user.update");
const doUserDelete = Server.httpPost("root.user.delete");
const fetchUserPage = Server.createFetchPage("root.user.page");
const doUserSearch = (
	discovery,
	data,
	events,
) => {
	Server.httpPost(
		discovery.link("root.user.search"),
		data,
		events,
	);
};

export {
	doUserCreate,
	doUserUpdate,
	doUserDelete,
	fetchUserPage,
	doUserSearch,
};
