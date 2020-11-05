import commonFetchHook from "utils/hook/commonFetchHook";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";

const KingdomRedux = CreateCommonRedux(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.delete",
	"root.kingdom.fetch",
	"root.user.kingdom.page",
	{
		attributes: CreateLinkRedux("kingdom", "attributes", "root.kingdom.attributes"),
		search: CreatePostRedux("kingdom", "search", "root.kingdom.search"),
		statistics: CreateFetchRedux("statistics", "root.kingdom.statistics", "{kingdom}"),
	},
);

const useKingdomFetch = commonFetchHook(KingdomRedux);

export {
	KingdomRedux,
	useKingdomFetch,
};
