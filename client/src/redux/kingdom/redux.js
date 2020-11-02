import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";

const KingdomRedux = CreateCommonRedux(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.delete",
	"root.kingdom.fetch",
	"root.user.kingdom.page",
	{
		attributes: CreateLinkRedux("kingdom", "attributes", "root.kingdom.attributes"),
	},
);

export default KingdomRedux;
