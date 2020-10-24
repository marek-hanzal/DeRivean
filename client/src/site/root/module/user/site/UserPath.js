const UserPath = {
	root: "user",
	dashboard: "dashboard",
	create: "create",
	list: "list",
};

UserPath.link = {
	dashboard: (root) => `${root.trimLeft("/")}/${UserPath.root}/${UserPath.dashboard}`,
};

export default UserPath;
