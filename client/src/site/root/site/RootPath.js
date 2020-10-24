const RootPath = {
	root: "/",
	signIn: "sign-in",
	signOut: "sign-out",
};

RootPath.link = {
	signOut: () => RootPath.root + "/" + RootPath.signOut
};

export default RootPath;
