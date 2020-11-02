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
            context: {
                match: () => "/user-c/:user/*",
                user: {
                    match: () => "user/*",
                    link: resolveUuid("user", "/user-c/:user/user")
                },
            },
        },
        kingdom: {
            match: () => "/user-context/:user/kingdom/*",
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
            context: {
                match: () => "/kingdom-context/:kingdom/*",
                kingdom: {
                    match: () => "/kingdom-context/:kingdom/kingdom/*",
                    link: resolveUuid("kingdom", "/kingdom-context/:kingdom/kingdom"),
                },
            }
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
