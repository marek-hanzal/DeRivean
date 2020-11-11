import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";

const doKingdomCreate = doPost("root.kingdom.create");
const doKingdomUpdate = doPost("root.kingdom.update");
const doKingdomDelete = doPost("root.kingdom.delete");
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");
const doKingdomSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken,
) => post(
	discovery.link("root.kingdom.search"),
	data,
	events,
	navigate,
	cancelToken,
);

export {
	doKingdomCreate,
	doKingdomUpdate,
	doKingdomDelete,
	fetchKingdomPage,
	doKingdomSearch,
};
