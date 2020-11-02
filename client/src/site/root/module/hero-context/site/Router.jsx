import BaseRoutes from "component/route/BaseRoutes";
import HeroView from "site/root/module/hero/view/hero/HeroView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.hero.context.hero.match(), <HeroView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const HeroContextRoute = () => route(Routes.root.hero.context.match(), <Router/>);

export {
	HeroContextRoute,
};
