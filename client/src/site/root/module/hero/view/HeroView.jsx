import {HeroRedux, useHeroFetch} from "redux/hero/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const HeroView = ({children, ...props}) => {
	return (
		<HeroContext.Provider value={{
			icon: <HeroIcon/>,
			id: "root.hero",
			redux: HeroRedux,
			link: Routes.root.hero,
			fetch: useHeroFetch,
			param: "hero",
		}}>
			<RootView context={HeroContext} {...props}>
				{children}
			</RootView>
		</HeroContext.Provider>
	);
};

export default HeroView;
