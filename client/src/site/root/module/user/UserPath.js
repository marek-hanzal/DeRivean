const root = "/user";

const UserPath = {
	root: root,
	dashboard: root + "/dashboard",
	create: root + "/create",
	list: root + "/list",
	edit: root + "/edit",
	home: uuid => `${root}/${uuid}/home`,
};

export default UserPath;
