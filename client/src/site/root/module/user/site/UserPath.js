import RootPath from "site/root/site/RootPath";

const
	root = "user",
	dashboard = "dashboard",
	create = "create",
	list = "list",
	context = "context",
	kingdom = "kingdom";

const UserPath = {
	route: {
		root: root + "/*",
		dashboard: dashboard,
		create: create,
		list: list,
		context: ":uuid/" + context,
		kingdom: ":uuid/" + kingdom,
	},
	link: {
		dashboard: () => `${RootPath.root}/${root}/${dashboard}`,
		create: () => `${RootPath.root}/${root}/${create}`,
		list: () => `${RootPath.root}/${root}/${list}`,
	},
	relative: {
		dashboard: () => "../" + dashboard,
		context: (uuid = null) => "../" + ((uuid ? uuid + "/" : "") + context),
		kingdom: () => "../" + kingdom,
	}
};

export default UserPath;
