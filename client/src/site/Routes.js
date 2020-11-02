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
            user: {
                match: () => "u/:user/*",
                link: resolveUuid("user", "/user/u/:user")
            },
        },
        kingdom: {
            match: () => "/kingdom/*",
            dashboard: {
                match: () => "u/:user/dashboard/*",
                link: resolveUuid("user", "/kingdom/u/:user/kingdom/dashboard"),
            },
            create: {
                match: () => "u/:user/create/*",
                link: resolveUuid("user", "/kingdom/u/:user/create"),
            },
            list: {
                match: () => "u/:user/list/*",
                link: resolveUuid("user", "/kingdom/u/:user/kingdom/list"),
            },
            kingdom: {
                match: () => "k/:kingdom/*",
                link: resolveUuid("kingdom", "/kingdom/k/:kingdom"),
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
            context: {
                match: () => "/hero-context/:hero/*",
                hero: {
                    match: () => "hero/*",
                    link: resolveUuid("hero", "/hero-context/:hero/hero"),
                },
            }
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
            context: {
                match: () => "/building-context/:building/*",
                building: {
                    match: () => "building/*",
                    link: resolveUuid("building", "/building-context/:building/building"),
                },
            }
        },
    }
};

export default Routes;
