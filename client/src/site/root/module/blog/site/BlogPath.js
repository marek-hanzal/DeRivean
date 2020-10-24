import RootPath from "site/root/site/RootPath";

const BlogPath = {
	root: "blog",
	dashboard: "dashboard",
	create: "create",
};

BlogPath.link = {
	dashboard: () => `${RootPath.root}/${BlogPath.root}/${BlogPath.dashboard}`,
	create: () => `${RootPath.root}/${BlogPath.root}/${BlogPath.create}`,
};

export default BlogPath;
