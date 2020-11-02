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
                link: resolveUuid("user", "/kingdom/u/:user/dashboard"),
            },
            create: {
                match: () => "u/:user/create/*",
                link: resolveUuid("user", "/kingdom/u/:user/create"),
            },
            list: {
                match: () => "u/:user/list/*",
                link: resolveUuid("user", "/kingdom/u/:user/list"),
            },
            kingdom: {
                match: () => "k/:kingdom/*",
                link: resolveUuid("kingdom", "/kingdom/k/:kingdom"),
            },
        },
        hero: {
            match: () => "/hero/*",
            dashboard: {
                match: () => "k/:kingdom/dashboard/*",
                link: resolveUuid("kingdom", "/hero/k/:kingdom/dashboard"),
            },
            create: {
                match: () => "k/:kingdom/create/*",
                link: resolveUuid("kingdom", "/hero/k/:kingdom/create"),
            },
            list: {
                match: () => "k/:kingdom/list/*",
                link: resolveUuid("kingdom", "/hero/k/:kingdom/list"),
            },
            hero: {
                match: () => "h/:hero/*",
                link: resolveUuid("hero", "/hero/h/:hero"),
            },
        },
        building: {
            match: () => "/building/*",
            dashboard: {
                match: () => "k/:kingdom/dashboard/*",
                link: resolveUuid("kingdom", "/building/k/:kingdom/dashboard"),
            },
            create: {
                match: () => "k/:kingdom/create/*",
                link: resolveUuid("kingdom", "/building/k/:kingdom/create"),
            },
            list: {
                match: () => "k/:kingdom/list/*",
                link: resolveUuid("kingdom", "/building/k/:kingdom/list"),
            },
            building: {
                match: () => "b/:building/*",
                link: resolveUuid("building", "/building/b/:building"),
            },
        },
    }
};

export default Routes;
