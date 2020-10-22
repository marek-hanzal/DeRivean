const root = "/user";

const UserPath = {
	root: root,
	dashboard: root + "/dashboard",
	create: root + "/create",
	list: root + "/list",
	edit: root + "/edit",
	home: (uuid = null) => uuid ? `${root}/${uuid}/home` : root + "/:user/home",
};

export default UserPath;
