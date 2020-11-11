import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";

const doUserCreate = doPost("root.user.create");
const doUserUpdate = doPost("root.user.update");
const doUserDelete = doPost("root.user.delete");
const fetchUserPage = fetchPage("root.user.page");
const doUserSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken,
) => {
	post(
		discovery.link("root.user.search"),
		data,
		events,
		navigate,
		cancelToken,
	);
};

export {
	doUserCreate,
	doUserUpdate,
	doUserDelete,
	fetchUserPage,
	doUserSearch,
};
