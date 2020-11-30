import {Server} from "@leight-core/leight";

const doUserCreate = Server.createPost("root.user.create");
const doUserUpdate = Server.createPost("root.user.update");
const doUserDelete = Server.createPost("root.user.delete");
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
