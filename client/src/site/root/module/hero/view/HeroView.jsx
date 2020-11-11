import {doHeroCreate, doHeroDelete, doHeroUpdate, useHeroAttributesFetch, useHeroFetch} from "redux/hero/redux";
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
		<HeroContext.Provider
			value={{
				base: HeroView,
				icon: <HeroIcon/>,
				id: "root.hero",
				link: Routes.root.hero,
				create: doHeroCreate,
				update: doHeroUpdate,
				delete: doHeroDelete,
				fetch: useHeroFetch,
				attributes: useHeroAttributesFetch,
				param: "hero",
				parentParam: "kingdom",
			}}
			children={<RootView context={HeroContext} {...props} children={children}/>}
		/>
	);
};

export default HeroView;
