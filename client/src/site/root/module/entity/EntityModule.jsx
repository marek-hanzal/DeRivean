import Module from "component/Module";
import React from "react";
import RootView from "site/root/component/RootView";
import CreateView from "site/root/module/entity/view/CreateView";
import HomeView from "site/root/module/entity/view/HomeView";
import ListView from "site/root/module/entity/view/ListView";

const EntityModule = ({root, view = RootView}) =>
	<Module
		root={root}
		home={() => <HomeView view={view}/>}
		create={() => <CreateView view={view}/>}
		list={() => <ListView view={view}/>}
	/>
;

export default EntityModule;
