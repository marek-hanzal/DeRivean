import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateModule from "utils/redux/CreateModule";

const KingdomRedux = CreateModule(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.fetch",
	"root.user.kingdom.page",
	{
		attributes: CreateLinkRedux("kingdom", "attributes", "root.kingdom.attributes"),
	},
);

export default KingdomRedux;
