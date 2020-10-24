import RootPath from "site/root/site/RootPath";

const UserPath = {
	root: "user",
	dashboard: "dashboard",
	create: "create",
	list: "list",
	home: id => id + "/home",
};

UserPath.link = {
	dashboard: () => `${RootPath.root}/${UserPath.root}/${UserPath.dashboard}`,
	create: () => `${RootPath.root}/${UserPath.root}/${UserPath.create}`,
	list: () => `${RootPath.root}/${UserPath.root}/${UserPath.list}`,
};

export default UserPath;
