const
	root = "user",
	dashboard = "dashboard",
	create = "create",
	list = "list",
	context = "context",
	kingdom = "kingdom";

const Routes = {
	route: {
		root: root + "/*",
		dashboard: dashboard,
		create: create,
		list: list,
		context: ":uuid/" + context,
		kingdom: ":uuid/" + kingdom,
	},
	absolute: {
		dashboard: `${root}/${dashboard}`,
	},
	relative: {
		dashboard: () => "../" + dashboard,
		context: (uuid = null) => "../" + ((uuid ? uuid + "/" : "") + context),
		kingdom: () => "../" + kingdom,
	}
};

export default Routes;
