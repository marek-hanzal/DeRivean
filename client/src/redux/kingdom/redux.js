import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";
import fetchPage from "utils/server/fetchPage";

const KingdomRedux = CreateCommonRedux(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.delete",
	{
		search: CreatePostRedux("kingdom", "search", "root.kingdom.search"),
	},
);

const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");
const dispatchKingdomUpdate = commonUpdateDispatch(KingdomRedux);
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");

export {
	KingdomRedux,
	useKingdomFetch,
	useKingdomAttributesFetch,
	useKingdomStatisticsFetch,
	dispatchKingdomUpdate,
	fetchKingdomPage,
};
