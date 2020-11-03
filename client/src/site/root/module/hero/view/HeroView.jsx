import React from "react";
import {HeroRedux} from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const HeroContext = React.createContext(null);

const HeroView = ({children, ...props}) => {
	return (
		<HeroContext.Provider value={{
			icon: <HeroIcon/>,
			id: "root.hero",
			redux: HeroRedux,
			link: {
				home: Routes.root.hero.home.link,
			}
		}}>
			<RootView context={HeroContext} {...props}>
				{children}
			</RootView>
		</HeroContext.Provider>
	);
};

export {
	HeroView,
	HeroContext,
};
