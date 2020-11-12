import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doKingdomCreate = doPost("game.kingdom.create");
const doKingdomUpdate = doPost("game.kingdom.update");
const doKingdomDelete = doPost("game.kingdom.delete");
const fetchKingdomPage = fetchPage("game.user.kingdom.page");

export {
	doKingdomCreate,
	doKingdomUpdate,
	doKingdomDelete,
	fetchKingdomPage,
};
