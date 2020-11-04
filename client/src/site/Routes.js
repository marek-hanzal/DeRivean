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
            edit: {
                match: () => "u/:user/edit/*",
                link: resolveUuid("user", "/user/u/:user/edit")
            },
            list: {
                match: () => "list/*",
                link: () => "/user/list",
            },
            home: {
                match: () => "u/:user/home/*",
                link: resolveUuid("user", "/user/u/:user/home")
            },
            attributes: {
                match: () => "u/:user/attributes/*",
                link: resolveUuid("user", "/user/u/:user/attributes")
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
                link: resolveUuid("translation", "/translation/t/:translation/edit")
            },
            home: {
                match: () => "t/:translation/home/*",
                link: resolveUuid("translation", "/translation/t/:translation/home")
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
            },
            create: {
                match: () => "u/:user/create/*",
                link: resolveUuid("user", "/kingdom/u/:user/create"),
            },
            list: {
                match: () => "u/:user/list/*",
                link: resolveUuid("user", "/kingdom/u/:user/list"),
            },
            home: {
                match: () => "k/:kingdom/home",
                link: resolveUuid("kingdom", "/kingdom/k/:kingdom/home"),
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
            home: {
                match: () => "h/:hero/home",
                link: resolveUuid("hero", "/hero/h/:hero/home"),
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
            home: {
                match: () => "b/:building/home",
                link: resolveUuid("building", "/building/b/:building/home"),
            },
        },
    }
};

export default Routes;
