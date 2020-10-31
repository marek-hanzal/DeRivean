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
			list: {
				match: () => "list/*",
				link: () => "/blog/list",
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
		kingdom: {
			match: () => "kingdom/*",
			link: resolveUuid("user", "/user-context/:user/kingdom"),
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("user", "/user-context/:user/kingdom/dashboard"),
			},
			create: {
				match: () => "create",
				link: resolveUuid("user", "/user-context/:user/kingdom/create"),
			},
			list: {
				match: () => "list",
				link: resolveUuid("user", "/user-context/:user/kingdom/list"),
			},
		},
		kingdomContext: {
			match: () => "/kingdom-context/:kingdom/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/dashboard"),
			},
		},
		buildingContext: {
			match: () => "/building-context/:building/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("building", "/building-context/:building/dashboard"),
			},
		},
		heroContext: {
			match: () => "/hero-context/:hero/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("hero", "/hero-context/:hero/dashboard"),
			},
		},
		hero: {
			match: () => "hero/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/hero/dashboard"),
			},
			create: {
				match: () => "create",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/hero/create"),
			},
			list: {
				match: () => "list",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/hero/list"),
			},
		},
		building: {
			match: () => "building/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/building/dashboard"),
			},
			create: {
				match: () => "create",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/building/create"),
			},
			list: {
				match: () => "list",
				link: resolveUuid("kingdom", "/kingdom-context/:kingdom/building/list"),
			},
		},
		userContext: {
			match: () => "/user-context/:user/*",
			dashboard: {
				match: () => "dashboard/*",
				link: resolveUuid("user", "/user-context/:user/dashboard")
			},
		},
	}
};

export default Routes;
