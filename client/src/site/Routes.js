import {generatePath} from "react-router";

function resolveUuid(param, path) {
	return (uuid = null) => uuid ? generatePath(path, {[param]: uuid}) : path;
}

const Routes = {
	public: {
		match: () => "/",
		link: () => "/",
		signUp: {
			match: () => "sign-up/*",
			link: () => "/sign-up",
		},
		signIn: {
			match: () => "sign-in/*",
			link: () => "/sign-in",
		},
		signOut: {
			match: () => "sign-out/*",
			link: () => "/sign-out",
		},
	},
	root: {
		match: () => "/",
		link: () => "/",
		signIn: {
			match: () => "sign-in/*",
			link: () => "/sign-in",
		},
		signOut: {
			match: () => "sign-out/*",
			link: () => "/sign-out",
		},
		blog: {
			match: () => "/blog/*",
			dashboard: {
				match: () => "dashboard/*",
				link: () => "/blog/dashboard",
			},
			create: {
				match: () => "create/*",
				link: () => "/blog/create",
			},
		},
		user: {
			match: () => "/user/*",
			dashboard: {
				match: () => "dashboard/*",
				link: () => "/user/dashboard",
			},
			create: {
				match: () => "create/*",
				link: () => "/user/create",
			},
			list: {
				match: () => "list/*",
				link: () => "/user/list",
			},
		},
		userContext: {
			match: () => "/user-context/:user/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("user", "/user-context/:user/dashboard")
			},
			kingdom: {
				match: () => "kingdom/*",
				link: resolveUuid("user", "/user-context/:user/kingdom")
			},
		}
	}
};

export default Routes;
