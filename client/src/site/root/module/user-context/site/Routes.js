import {generatePath} from "react-router";

const
	root = "/user-context/:uuid",
	dashboard = "dashboard",
	kingdom = "kingdom";

const Routes = {
	route: {
		root: root + "/*",
		dashboard,
		kingdom,
	},
	absolute: {
		dashboard: `${root}/${dashboard}`,
	},
	relative: {},
	link: {
		dashboard: uuid => generatePath(root + "/" + dashboard, {uuid}),
	}
};

export default Routes;
