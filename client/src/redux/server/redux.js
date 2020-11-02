import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const ServerRedux = CreateRedux({
	validate: CreateLinkRedux("server", "validate", "root.server.validate"),
	sites: CreateLinkRedux("server", "sites", "root.server.sites"),
});

export default ServerRedux;
