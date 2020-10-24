const
	root = "/",
	signUp = "sign-up",
	signIn = "sign-in",
	signOut = "sign-out";

const Routes = {
	route: {
		root: root + "/*",
		signUp,
		signIn,
		signOut,
	},
	relative: {
		root,
		signIn: "../" + signIn,
	}
};

export default Routes;
