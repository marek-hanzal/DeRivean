const
	root = "user",
	dashboard = "dashboard",
	create = "create",
	list = "list";

const Routes = {
	route: {
		root: root + "/*",
		dashboard,
		create,
		list,
	},
	absolute: {
		dashboard: `${root}/${dashboard}`,
	},
	relative: {
		dashboard: "../" + dashboard,
		dashboardUp: "../../" + dashboard,
	},
};

export default Routes;
