import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";
import fetchPage from "utils/server/fetchPage";

const KingdomRedux = CreateCommonRedux(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.delete",
	{
		attributes: CreateLinkRedux("kingdom", "attributes", "root.kingdom.attributes"),
		search: CreatePostRedux("kingdom", "search", "root.kingdom.search"),
		statistics: CreateFetchRedux("statistics", "root.kingdom.statistics", "{kingdom}"),
	},
);

const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const dispatchKingdomUpdate = commonUpdateDispatch(KingdomRedux);
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");

export {
	KingdomRedux,
	useKingdomFetch,
	dispatchKingdomUpdate,
	fetchKingdomPage,
};
