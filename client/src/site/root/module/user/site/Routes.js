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
		dashboard,
		create,
		list,
		context: ":uuid/" + context,
		kingdom: ":uuid/" + kingdom,
	},
	absolute: {
		dashboard: `${root}/${dashboard}`,
	},
	relative: {
		dashboard: "../" + dashboard,
		context: "../" + context,
		kingdom: "../" + kingdom,
	},
	link: {
		context: uuid => "../" + uuid + "/" + context,
	}
};

export default Routes;
