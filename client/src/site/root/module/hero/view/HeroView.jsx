import {
	doHeroCreate,
	useHeroAttributesFetch,
	useHeroFetch
} from "redux/hero/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const HeroView = (
	{
		children,
		...props
	}) => {
	return (
		<HeroContext.Provider value={{
			icon:        <HeroIcon/>,
			id:          "root.hero",
			link:        Routes.root.hero,
			create:      doHeroCreate,
			fetch:       useHeroFetch,
			attributes:  useHeroAttributesFetch,
			param:       "hero",
			parentParam: "kingdom",
		}}>
			<RootView context={HeroContext} {...props}>
				{children}
			</RootView>
		</HeroContext.Provider>
	);
};

export default HeroView;
