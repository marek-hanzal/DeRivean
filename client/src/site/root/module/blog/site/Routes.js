const
	root = "blog",
	dashboard = "dashboard",
	create = "create",
	list = "list",
	context = "context";

const Routes = {
	route: {
		up: "../",
		root: root + "/*",
		dashboard,
		create,
		list,
		context: ":uuid/" + context,
	},
	absolute: {
		dashboard: `${root}/${dashboard}`,
	},
	relative: {
		dashboard: "../" + dashboard,
	},
	link: {
		context: uuid => "../" + uuid + "/" + context,
	}
};

export default Routes;
