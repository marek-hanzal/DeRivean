import {generatePath} from "react-router";

function resolveUuid(param, path) {
	return (uuid = null) => uuid ? generatePath(path, {[param]: uuid}) : path;
}

const Routes = {
	game: {
		kingdom: {
			match: () => "/kingdom/*",
			dashboard: {
				match: () => "dashboard/*",
				link: () => "/kingdom/dashboard",
			},
			create: {
				match: () => "create/*",
				link: () => "/kingdom/create",
			},
			edit: {
				match: () => "k/:kingdom/edit",
				link: resolveUuid("kingdom", "/kingdom/k/:kingdom/edit"),
				params: ["kingdom"],
			},
			list: {
				match: () => "list/*",
				link: () => "/kingdom/list",
			},
			home: {
				match: () => "k/:kingdom/home",
				link: resolveUuid("kingdom", "/kingdom/k/:kingdom/home"),
				params: ["kingdom"],
			},
		},
		building: {
			match: () => "/building/*",
			dashboard: {
				match: () => "k/:kingdom/dashboard/*",
				link: resolveUuid("kingdom", "/building/k/:kingdom/dashboard"),
				params: ["kingdom"],
			},
			list: {
				match: () => "k/:kingdom/list/*",
				link: resolveUuid("kingdom", "/building/k/:kingdom/list"),
				params: ["kingdom"],
			},
			home: {
				match: () => "b/:building/home",
				link: resolveUuid("building", "/building/b/:building/home"),
				params: ["building"],
			},
		},
	},
	root: {
		attributeGroup: {
			match: () => "/attribute-group/*",
			dashboard: {
				match: () => "dashboard/*",
				link: () => "/attribute-group/dashboard",
			},
			create: {
				match: () => "create/*",
				link: () => "/attribute-group/create",
			},
			edit: {
				match: () => "g/:group/edit/*",
				link: resolveUuid("group", "/attribute-group/g/:group/edit"),
				params: ["group"],
			},
			list: {
				match: () => "list/*",
				link: () => "/attribute-group/list",
			},
			home: {
				match: () => "g/:group/home/*",
				link: resolveUuid("group", "/attribute-group/g/:group/home"),
				params: ["group"],
			},
		},
		attributeType: {
			match: () => "/attribute-type/*",
			dashboard: {
				match: () => "g/:group/dashboard/*",
				link: resolveUuid("group", "/attribute-type/g/:group/dashboard"),
				params: ["group"],
			},
			create: {
				match: () => "g/:group/create/*",
				link: resolveUuid("group", "/attribute-type/g/:group/create"),
				params: ["group"],
			},
			edit: {
				match: () => "t/:type/edit/*",
				link: resolveUuid("type", "/attribute-type/t/:type/edit"),
				params: ["type"],
			},
			list: {
				match: () => "g/:group/list/*",
				link: resolveUuid("group", "/attribute-type/g/:group/list"),
				params: ["group"],
			},
			home: {
				match: () => "t/:type/home/*",
				link: resolveUuid("type", "/attribute-type/t/:type/home"),
				params: ["type"],
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
			edit: {
				match: () => "u/:user/edit/*",
				link: resolveUuid("user", "/user/u/:user/edit"),
				params: ["user"],
			},
			list: {
				match: () => "list/*",
				link: () => "/user/list",
			},
			home: {
				match: () => "u/:user/home/*",
				link: resolveUuid("user", "/user/u/:user/home"),
				params: ["user"],
			},
			attributes: {
				match: () => "u/:user/attributes/*",
				link: resolveUuid("user", "/user/u/:user/attributes"),
				params: ["user"],
			},
		},
		translation: {
			match: () => "/translation/*",
			dashboard: {
				match: () => "dashboard/*",
				link: () => "/translation/dashboard",
			},
			create: {
				match: () => "create/*",
				link: () => "/translation/create",
			},
			edit: {
				match: () => "t/:translation/edit/*",
				link: resolveUuid("translation", "/translation/t/:translation/edit"),
				params: ["translation"],
			},
			home: {
				match: () => "t/:translation/edit/*",
				link: resolveUuid("translation", "/translation/t/:translation/edit"),
				params: ["translation"],
			},
			list: {
				match: () => "list/*",
				link: () => "/translation/list",
			},
		},
		kingdom: {
			match: () => "/kingdom/*",
			dashboard: {
				match: () => "u/:user/dashboard/*",
				link: resolveUuid("user", "/kingdom/u/:user/dashboard"),
				params: ["user"],
			},
			create: {
				match: () => "u/:user/create/*",
				link: resolveUuid("user", "/kingdom/u/:user/create"),
				params: ["user"],
			},
			edit: {
				match: () => "k/:kingdom/edit",
				link: resolveUuid("kingdom", "/kingdom/k/:kingdom/edit"),
				params: ["kingdom"],
			},
			attributes: {
				match: () => "k/:kingdom/attributes",
				link: resolveUuid("kingdom", "/kingdom/k/:kingdom/attributes"),
				params: ["kingdom"],
			},
			list: {
				match: () => "u/:user/list/*",
				link: resolveUuid("user", "/kingdom/u/:user/list"),
				params: ["user"],
			},
			home: {
				match: () => "k/:kingdom/home",
				link: resolveUuid("kingdom", "/kingdom/k/:kingdom/home"),
				params: ["kingdom"],
			},
		},
		hero: {
			match: () => "/hero/*",
			dashboard: {
				match: () => "k/:kingdom/dashboard/*",
				link: resolveUuid("kingdom", "/hero/k/:kingdom/dashboard"),
				params: ["kingdom"],
			},
			create: {
				match: () => "k/:kingdom/create/*",
				link: resolveUuid("kingdom", "/hero/k/:kingdom/create"),
				params: ["kingdom"],
			},
			edit: {
				match: () => "h/:hero/edit",
				link: resolveUuid("hero", "/hero/h/:hero/edit"),
				params: ["hero"],
			},
			attributes: {
				match: () => "h/:hero/attributes",
				link: resolveUuid("hero", "/hero/h/:hero/attributes"),
				params: ["hero"],
			},
			list: {
				match: () => "k/:kingdom/list/*",
				link: resolveUuid("kingdom", "/hero/k/:kingdom/list"),
				params: ["kingdom"],
			},
			home: {
				match: () => "h/:hero/home",
				link: resolveUuid("hero", "/hero/h/:hero/home"),
				params: ["hero"],
			},
		},
		building: {
			match: () => "/building/*",
			dashboard: {
				match: () => "k/:kingdom/dashboard/*",
				link: resolveUuid("kingdom", "/building/k/:kingdom/dashboard"),
				params: ["kingdom"],
			},
			create: {
				match: () => "k/:kingdom/create/*",
				link: resolveUuid("kingdom", "/building/k/:kingdom/create"),
				params: ["kingdom"],
			},
			edit: {
				match: () => "b/:building/edit",
				link: resolveUuid("building", "/building/b/:building/edit"),
				params: ["building"],
			},
			attributes: {
				match: () => "b/:building/attributes",
				link: resolveUuid("building", "/building/b/:building/attributes"),
				params: ["building"],
			},
			list: {
				match: () => "k/:kingdom/list/*",
				link: resolveUuid("kingdom", "/building/k/:kingdom/list"),
				params: ["kingdom"],
			},
			home: {
				match: () => "b/:building/home",
				link: resolveUuid("building", "/building/b/:building/home"),
				params: ["building"],
			},
		},
	}
};
